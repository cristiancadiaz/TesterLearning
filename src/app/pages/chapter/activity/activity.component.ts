import { Component, OnInit } from '@angular/core';
import { CONFIG_ALERT, SERVICES, TAGS } from '../../../app.constants';
import { CollectionService } from '../../../services/collection.service';
import { Question } from '../../../models/question.model';
import { UtilService } from '../../../services/util.service';
import * as valueJson from '../../../../assets/templates/chapters/A001/questions/activity01.json';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  idChapter: string;
  idActivity: string;
  qualifyValue: number;
  obtainedResult: number = 0;
  userAnswer:  Array<Question> = new Array<Question>();
  

  questions: Array<Question> = []

  constructor(private route: ActivatedRoute, private utilService:UtilService, private collectionService: CollectionService, private authService: AuthService) {
    this.idChapter = this.route.snapshot.paramMap.get('id');
    this.idActivity = this.route.snapshot.paramMap.get('key');
  }

  ngOnInit(): void {
    /* var questions: any = (valueJson as any).default;
    this.collectionService.updateDocument('Chapters/A001/Activities/ACT001',{
      questions
    }).then((result)=>{
      console.log('result0', result);
    }) */
    this.collectionService.getCollectionById(`${SERVICES.CHAPTERS}/${this.idChapter}/${SERVICES.ACTIVITIES}/${this.idActivity}`).then((res)=>{
      if(res.exists)
        this.questions.push(...res.data().questions)
      this.generateValueAnswerUser();
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
          for (const index in this.questions) {
            if(this.questions[index].type == 'only-answer')
              this.questions[index].answer[0] == this.userAnswer[index].answer[0] ? this.obtainedResult += this.qualifyValue : ''
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
    var send;
    this.collectionService.modules.forEach((module)=>{
      if(module.key == this.idChapter){
        send = {
          activity: {
            answer: this.userAnswer,
            total: parseInt(this.obtainedResult.toString()).toFixed(),
          },
          progress: module.progress
        }
        this.collectionService.updateDocument(`${SERVICES.USERS}/${this.authService.currentUser.uid}/${SERVICES.CHAPTERS}/${this.idChapter}`,send).catch((err)=>{console.log('eerr',err);})
      }
    })

  }
  generateValueAnswerUser(){
    this.qualifyValue = 100 / this.questions.length;
    this.questions.forEach((item: Question)=>{
      this.userAnswer.push({key: item.key,answer: []
      })
    })
  }

}
