import { ReactiveFormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapterRoutingModule } from './chapter-routing.module';
import { ChapterComponent } from './chapter.component';
import { HeaderModule } from '../../components/header/header.module';
import { ActivityComponent } from './activity/activity.component';
import { QuestionComponent } from '../../components/question/question.component';

@NgModule({
  declarations: [ChapterComponent, ActivityComponent,QuestionComponent],
  imports: [
    HeaderModule, 
    CommonModule,
    ChapterRoutingModule,
    ReactiveFormsModule
  ]
})
export class ChapterModule { }
