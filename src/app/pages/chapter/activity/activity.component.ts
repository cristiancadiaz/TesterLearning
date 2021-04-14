import { Component, OnInit } from '@angular/core';
import { CONFIG_ALERT, TAGS } from 'src/app/app.constants';
import { Question } from '../../../models/question.model';
import { UtilService } from '../../../services/util.service';

@Component({
  selector: 'activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  qualifyValue: number;
  obtainedResult: number = 0;
  userAnswer:  Array<Question> = new Array<Question>();

  arrActivities: Array<Question> = [
    {
      key: 'A001',
      type: 'only-answer',
      title: '¿Cual es la deficion de error ?',
      content: [
        {
          name:'A001_answer01',
          value:'a',
          label:'a. Error Humano'
        },
        {
          name:'A001_answer01',
          value:'b',
          label:'b. Acción Humana'
        },
        {
          name:'A001_answer01',
          value:'c',
          label:'c. Un choque hormonal '
        },
        {
          name:'A001_answer01',
          value:'d',
          label:'d. Un Televisor'
        }
      ],
      answer: ['b']
    },
    {
      key: 'A002',
      type: 'only-answer',
      title: '¿Palabra que se utilizan para definir al ser humano del sexo femenino, cuya anatomía genital se define por poseer senos, vagina, vulva, útero, ovarios y trompas de Falopio, su opuesto es el hombre (varón)?',
      content: [
        {
          name:'A001_answer02',
          value:'a',
          label:'a. Error Humano'
        },
        {
          name:'A001_answer02',
          value:'b',
          label:'b. Acción Humana'
        },
        {
          name:'A001_answer02',
          value:'c',
          label:'c. Un choque hormonal '
        },
        {
          name:'A001_answer02',
          value:'d',
          label:'d. Un Televisor'
        }
      ],
      answer: ['c']
    },
    {
      key: 'A003',
      type: 'only-answer',
      title: '¿Sistema para la transmisión y recepción de imágenes y sonidos a distancia que simulan movimientos, que emplea un mecanismo de difusión.?',
      content: [
        {
          name:'A001_answer03',
          value:'a',
          label:'a. Error Humano'
        },
        {
          name:'A001_answer03',
          value:'b',
          label:'b. Acción Humana'
        },
        {
          name:'A001_answer03',
          value:'c',
          label:'c. Un choque hormonal '
        },
        {
          name:'A001_answer03',
          value:'d',
          label:'d. Un Televisor'
        }
      ],
      answer: ['d']
    },
    {
      key: 'A004',
      type: 'only-answer',
      title: '¿Sistema para la transmisión y recepción de imágenes y sonidos a distancia que simulan movimientos, que emplea un mecanismo de difusión.?',
      content: [
        {
          name:'A001_answer04',
          value:'a',
          label:'a. Error Humano'
        },
        {
          name:'A001_answer04',
          value:'b',
          label:'b. Acción Humana'
        },
        {
          name:'A001_answer04',
          value:'c',
          label:'c. Un choque hormonal '
        },
        {
          name:'A001_answer04',
          value:'d',
          label:'d. Un Televisor'
        }
      ],
      answer: ['d']
    }
  ]

  constructor(private utilService:UtilService) {
    this.qualifyValue = 100 / this.arrActivities.length;
  }

  ngOnInit(): void {
    this.arrActivities.forEach((item: Question)=>{
      this.userAnswer.push({
        key: item.key,
        answer: []
      })
    })
  }

  getResult($event: Question){
    this.userAnswer.forEach((item: Question)=>{
      if(item.key == $event.key)
        item.answer = $event.answer
    })
  }
  qualifyActivity(){
    var qstWithRespond = this.validateAnswerToActivity();
    if(qstWithRespond)
      this.utilService.openCustomAlert(`PENDIENTE`,'error',CONFIG_ALERT.TIMERS.SLOW,'center',`Falta responder la pregunta ${qstWithRespond}`,false)
    if(isNaN(qstWithRespond)){
      this.utilService.openModal(TAGS.LABELS.ARE_YOU_SURE,'info',TAGS.LABELS.YES,TAGS.LABELS.NOT).then((result)=>{
        if(result.isConfirmed){
          for (const index in this.arrActivities) {
            if(this.arrActivities[index].type == 'only-answer')
              this.arrActivities[index].answer[0] == this.userAnswer[index].answer[0] ? this.obtainedResult += this.qualifyValue : ''
          }
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

}
