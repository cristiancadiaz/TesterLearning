import { Component, OnInit } from '@angular/core';
import { Question } from '../../../models/question.model';
import { UtilService } from '../../../services/util.service';

@Component({
  selector: 'activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  constructor(private utilService:UtilService) { }

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
    }
  ]

  ngOnInit(): void {
  }

  getResult($event){
    console.log('event',$event);
  }

}
