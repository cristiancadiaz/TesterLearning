import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input('qst') qst: any;
  @Output() handlerResult = new EventEmitter<string>();
  public result: any;

  constructor() { }

  ngOnInit(): void {}
  onItemChange(key: string,$event){
    this.result = {
      key,
      answer: [$event]
    }
    this.handlerResult.emit(this.result)
    
  }

}
