import { Component, OnInit } from '@angular/core';
import { CONFIG_ALERT } from 'src/app/app.constants';
import { Question } from '../../../models/question.model';
import { UtilService } from '../../../services/util.service';

@Component({
  selector: 'activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  qualifyValue: number;
  resultValue: number = 0;
  userAnswer:  Array<Question> = new Array<Question>();
  arrActivities: Array<Question> = [
    {
      key: 'A001',
      type: 'only-answer',
      title: '¿Cual es la deficion de error ?',
      content: [
        {
          id:'A001_answer01',
          value:'a',
          label:'a. Error Humano'
        },
        {
          id:'A001_answer01',
          value:'b',
          label:'b. Acción Humana'
        },
        {
          id:'A001_answer01',
          value:'c',
          label:'c. Un choque hormonal '
        },
        {
          id:'A001_answer01',
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
          id:'A001_answer02',
          value:'a',
          label:'a. Error Humano'
        },
        {
          id:'A001_answer02',
          value:'b',
          label:'b. Acción Humana'
        },
        {
          id:'A001_answer02',
          value:'c',
          label:'c. Un choque hormonal '
        },
        {
          id:'A001_answer02',
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
          id:'A001_answer03',
          value:'a',
          label:'a. Error Humano'
        },
        {
          id:'A001_answer03',
          value:'b',
          label:'b. Acción Humana'
        },
        {
          id:'A001_answer03',
          value:'c',
          label:'c. Un choque hormonal '
        },
        {
          id:'A001_answer03',
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
          id:'A001_answer04',
          value:'a',
          label:'a. Error Humano'
        },
        {
          id:'A001_answer04',
          value:'b',
          label:'b. Acción Humana'
        },
        {
          id:'A001_answer04',
          value:'c',
          label:'c. Un choque hormonal '
        },
        {
          id:'A001_answer04',
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
    for (const index in this.arrActivities) {
      if(this.arrActivities[index].type == 'only-answer')
        this.arrActivities[index].answer[0] == this.userAnswer[index].answer[0] ? this.resultValue += this.qualifyValue : ''
    }
    this.utilService.openCustomAlert(`RESULTADO`,'info',CONFIG_ALERT.TIMERS.DEFAULT,'center',`Tu calificación es ${this.resultValue}`,false)
  }

}
