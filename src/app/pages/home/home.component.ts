import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  styleObj: any;
  arrModules = [
    {
      title: 'Modulo 1',
      description: 'Test',
      bgc: `#3f51b5`,
      progress: 60,
      position:{ top: 200, left: 300 }
    },
    {
      title: 'Modulo 2',
      description: 'Test',
      bgc: `#3f51b5`,
      progress: 20,
      position:{ top: 200, left: 500 }
    },
    {
      title: 'Modulo 3',
      description: 'Test',
      bgc: `#3f51b5`,
      progress: 5,
      position:{ top: 200, left: 700 }
    },
  ]

  ngOnInit(): void {
  }

}
