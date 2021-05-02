import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UtilService } from '../../services/util.service';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input('qst') qst: any;
  @Output() handlerResult = new EventEmitter<string>();
  public result: any;

  constructor(public utilService: UtilService) { }

  ngOnInit(): void {}
  onItemChange(qst,$event){
    switch (qst.type) {
      case 'only-answer':
        this.result = {
          type: qst.type,
          key: qst.key,
          answer: $event
        }
        break;
      case 'autocomplete':
        this.result = {
          type: qst.type,
          key: qst.key,
          answer: {name: $event.target.name, value: $event.target.value.toLocaleLowerCase()}
        }
        break;
      default:
        break;
    }
    this.handlerResult.emit(this.result)
  }
}
