import { Component, Input, OnInit } from '@angular/core';

import { TAGS } from "../../app.constants";

@Component({
  selector: 'description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  TAGS = TAGS;
  @Input('item') item: any;

  constructor() { }

  ngOnInit(): void {
  }

}
