import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BalloonButtonComponent } from '../../components/balloon-button/balloon-button.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderModule } from '../../components/header/header.module';
import { DescriptionComponent } from '../../components/description/description.component';

@NgModule({
  declarations: [
    DashboardComponent,
    BalloonButtonComponent,
    DescriptionComponent
  ],
  entryComponents: [
  ],
  imports: [
    HeaderModule,  
    DashboardRoutingModule,
    CommonModule,
    FormsModule      
  ]
})
export class DashboardModule { }
