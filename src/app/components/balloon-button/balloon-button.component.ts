import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'balloon-button',
  templateUrl: './balloon-button.component.html',
  styleUrls: ['./balloon-button.component.scss']
})
export class BalloonButtonComponent implements OnInit {

  @Input('index') index: any;
  @Input('styleObj') styleObj: any;
  @Input('activeItem') activeItem: any;

  public background;

  constructor() { }
  
  ngOnInit(): void {
    this.background = `linear-gradient(0deg, ${this.styleObj.bgc} ${this.styleObj.progress}%, #FAFAFA 0%)`
    //this.background = `radial-gradient(circle at 50%  90%, #3c84cc 0%, #316dc2 100%, #4e95d3 0%)`
  }

}
