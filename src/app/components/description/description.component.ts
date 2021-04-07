import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TAGS } from "../../app.constants";

@Component({
  selector: 'description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  TAGS = TAGS;
  @Input('item') item: any;

  constructor(private router: Router) {
    
  }
  
  ngOnInit(): void {
    console.log('item =>', this.item);
  }

  redirectChapter(key: string){
    this.router.navigate([`/chapter/${key}`]);
  }

}
