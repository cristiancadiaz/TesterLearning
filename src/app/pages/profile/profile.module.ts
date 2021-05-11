import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from '../../components/header/header.module';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ChapterModule } from '../chapter/chapter.module';

@NgModule({
  declarations: [
    ProfileComponent,
  ],
  entryComponents: [
  ],
  imports: [
    ChapterModule,
    CommonModule,
    FormsModule,    
    HeaderModule,  
    ProfileRoutingModule,
  ]
})
export class ProfileModule { }
