import { Component, Input, OnInit } from '@angular/core';
import { CONFIG_ALERT, SERVICES, TAGS } from '../../../app.constants';
import { CollectionService } from '../../../services/collection.service';
import { Question } from '../../../models/question.model';
import { UtilService } from '../../../services/util.service';
import * as valueJson from '../../../../assets/templates/chapters/A001/questions/activity02.json';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  idRoute: string;
  idKey: string;
  qualifyValue: number;
  obtainedResult: number = 0;
  showResult:boolean = false;
  isModal:boolean;
  userAnswer:  Array<Question> = new Array<Question>();
  questions: Array<Question> = [];
  assignRoute: string = '';
  isActivity: boolean;
  total: number;

  @Input('chapter') resultUser: any;

  constructor(private route: ActivatedRoute, private utilService:UtilService, private collectionService: CollectionService, private authService: AuthService) {
    this.isActivity = location.pathname.indexOf('chapter') > 0;
    this.idRoute = this.route.snapshot.paramMap.get('id');
    this.idKey = this.route.snapshot.paramMap.get('key');
  }

  ngOnInit(): void {
    if(!this.resultUser){
      console.log('ngOnInit');
      this.getAnswwerUser();
      this.getQuestions();
    }
  }
  ngOnChanges(){
    
    if(this.resultUser){
      console.log('ngOnChanges');
      this.userAnswer = [];
      this.questions = [];
      this.total = -1;
      this.isModal = false;
      this.idRoute = this.resultUser.module ? this.resultUser.module : this.resultUser.key;
      this.idKey = this.resultUser.idActivity ? this.resultUser.idActivity : '';
      this.isActivity = this.resultUser.idActivity ? true : false;
      this.getAnswwerUser();
      this.getQuestions();
    }
  
  }

  async getQuestions(){
     /*  var questions: any = (valueJson as any).default;
    this.collectionService.updateDocument('/Chapters/A001/Activities/ACT001',{
      questions
    }).then((result)=>{
      console.log('result0', result);
    }) */
    this.assignRoute = this.isActivity ? `${SERVICES.CHAPTERS}/${this.idRoute}/${SERVICES.ACTIVITIES}/${this.idKey}` : `${SERVICES.EXAMS}/EX001`;
    await this.collectionService.getCollectionById(this.assignRoute).then((res)=>{
      if(res.exists){
        if(this.userAnswer.length){
          res.data().questions.forEach((item,index)=>{
            this.questions.push({answerUser: this.userAnswer[index].answer ? this.userAnswer[index].answer : this.userAnswer[index],...item})
          })
        }else{
          this.questions.push(...res.data().questions)
          this.generateValueAnswerUser()
        }
      }
    });
  }

  async getAnswwerUser(){
    this.assignRoute = `${SERVICES.USERS}/${this.authService.currentUser.uid}/${this.isActivity ? SERVICES.CHAPTERS +'/'+this.idRoute : SERVICES.EXAMS + '/EX001' }`;
    await this.collectionService.getCollectionById(this.assignRoute).then((res)=>{
      if(res.exists){
        if(res.data().activity || res.data().total){
          this.isModal = true;
          this.total = res.data().activity ? res.data().activity.total : res.data().total
          this.userAnswer.push(...res.data().activity ? res.data().activity.answer : res.data().answer);
        }
      }
    });
    

  }

  getResult($event: any){
    this.userAnswer.forEach((item: Question)=>{
      if(item.key == $event.key){
        switch ($event.type) {
          case 'only-answer':
              item.answer = $event.answer
            break;
          case 'autocomplete':
            var exist = item.answer.find((result)=>{
              if($event.answer.name == result.name){
                result.value = $event.answer.value
                return result
              }
            })
            if(!exist)
              item.answer.push($event.answer);
            item.answer.sort((a,b)=>{
              if (a.name > b.name) 
                return 1;
              if (a.name < b.name) 
                return -1;
            })
            break;
          default:
            break;
        }
      }
    })
    
  }

  qualifyActivity(){
    var qstWithRespond = this.validateAnswerToActivity();
    if(qstWithRespond)
      this.utilService.openCustomAlert(`PENDIENTE`,'error',CONFIG_ALERT.TIMERS.SLOW,'center',`Falta responder la pregunta ${qstWithRespond}`,false)
    if(isNaN(qstWithRespond)){
      this.utilService.openModal(TAGS.LABELS.ARE_YOU_SURE,'info',TAGS.LABELS.YES,TAGS.LABELS.NOT).then((result)=>{
        if(result.isConfirmed){
          console.log('this.userAnswer',this.userAnswer);
          
          for (const index in this.questions) {
            if(this.questions[index].type == 'only-answer')
              this.questions[index].answer == this.userAnswer[index].answer ? this.obtainedResult += this.qualifyValue : ''
            if(this.questions[index].type == 'autocomplete'){
              for (const n in this.userAnswer[index].answer) {
                this.questions[index].answer.find((item)=>{
                  if(item.name ==  this.userAnswer[index].answer[n].name)
                    item.value == this.userAnswer[index].answer[n].value ? this.obtainedResult += this.qualifyValue/this.questions[index].answer.length : ''
                })
              }
            }
          }
          this.sendResult();
        }
      })
    }
  }

  validateAnswerToActivity(): number{
    let assign : string;
    for (const key in this.userAnswer) {
      if(!this.userAnswer[key].answer.length)
        assign = key;
      if(assign)
        break;
    }
    return parseInt(assign) + 1;
  }

  sendResult(){
    this.showResult = !this.showResult;
    var send;
    this.collectionService.modules.forEach((module)=>{
      if(module.key == this.idRoute){
        send = {
          activity: {
            module: this.idRoute,
            idActivity: this.idKey,
            answer: this.userAnswer,
            total: parseInt(this.obtainedResult.toString()).toFixed(),
          },
          progress: module.progress
        }
      }
    })
    if(!this.isActivity)
      send = {answer: this.userAnswer,total: parseInt(this.obtainedResult.toString()).toFixed()}
    this.collectionService.updateDocument(`${SERVICES.USERS}/${this.authService.currentUser.uid}/${this.isActivity ? SERVICES.CHAPTERS : SERVICES.EXAMS}/${this.idRoute}`,send).catch((err)=>{console.log('eerr',err);})
  }

  generateValueAnswerUser(){
    this.qualifyValue = 100 / this.questions.length;
    this.questions.forEach((item: any)=>{
      this.userAnswer.push({key: item.key,answer: []
      })
    })
  }

}
