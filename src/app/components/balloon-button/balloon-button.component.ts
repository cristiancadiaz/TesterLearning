import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'balloon-button',
  templateUrl: './balloon-button.component.html',
  styleUrls: ['./balloon-button.component.scss']
})
export class BalloonButtonComponent implements OnInit {

  @Input('index') index: any;
  @Input('styleObj') styleObj: any;

  public background;

  constructor() { 
  }
  
  ngOnInit(): void {
    console.log('test ?>', this.styleObj)
    this.background = `linear-gradient(0deg, ${this.styleObj.bgc} ${this.styleObj.progress}%, #FAFAFA 0%)`
  }

}
