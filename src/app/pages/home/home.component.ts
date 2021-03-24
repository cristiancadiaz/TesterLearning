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
      title: 'Fases de Pruebas',
      description: 'Definición de cada una de las fases.',
      bgc: `#3f51b5`,
      progress: 60,
      position:{ top: 350, left: 300 }
    },
    {
      title: 'Modulo 2',
      description: 'Test',
      bgc: `#3f51b5`,
      progress: 20,
      position:{ top: 200, left: 400 }
    },
    {
      title: 'Modulo 3',
      description: 'Test',
      bgc: `#3f51b5`,
      progress: 50,
      position:{ top: 100, left: 550 }
    },
    {
      title: 'Modulo 4',
      description: 'Test',
      bgc: `#3f51b5`,
      progress: 10,
      position:{ top: 100, left: 750 }
    },
    {
      title: 'Modulo 5',
      description: 'Test',
      bgc: `#3f51b5`,
      progress: 100,
      position:{ top: 200, left: 900 }
    },
    {
      title: 'Modulo 6',
      description: 'Test',
      bgc: `#3f51b5`,
      progress: 80,
      position:{ top: 350, left: 1000 }
    },
  ]

  ngOnInit(): void {
  }

}
