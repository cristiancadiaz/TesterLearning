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

  ngOnInit(): void {
    console.log('question', this.qst);
    console.log('question', this.result);
    
  }
  onItemChange(id: string,$event){
    this.result = {
      id,
      value: $event
    }
    this.handlerResult.emit(this.result)
    
  }

}
