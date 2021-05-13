import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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
  backgroundImg: any;

  constructor(private router: Router, private _sanitizer:DomSanitizer) {}
  
  ngOnInit(): void {
    this.backgroundImg = this._sanitizer.bypassSecurityTrustStyle('url(https://firebasestorage.googleapis.com/v0/b/testerlearning-21e1c.appspot.com/o/Dashboard%2FcardDashboard.jpg?alt=media&token=a6bda2df-d5e8-4852-9365-76e88a555035)');
  }

  redirectChapter(key: string){
    this.router.navigate([`/chapter/${key}`]);
  }

}
