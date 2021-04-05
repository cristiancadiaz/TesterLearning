import { NgModule } from '@angular/core';

import { HomeComponent } from '../home/home.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderModule } from '../../components/header/header.module';
import { LoginModule } from '../../components/login/login.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  entryComponents: [
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    LoginModule,
    HeaderModule,
    FormsModule      
  ]
})
export class HomeModule { }
