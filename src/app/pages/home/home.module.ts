import { NgModule } from '@angular/core';

import { HomeComponent } from '../home/home.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { BalloonButtonComponent } from 'src/app/components/balloon-button/balloon-button.component';

@NgModule({
  declarations: [
    HomeComponent,
    BalloonButtonComponent
  ],
  entryComponents: [
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    FormsModule      
  ]
})
export class HomeModule { }
