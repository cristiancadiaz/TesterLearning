import { ReactiveFormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapterRoutingModule } from './chapter-routing.module';
import { ChapterComponent } from './chapter.component';

@NgModule({
  declarations: [ChapterComponent],
  imports: [
    CommonModule,
    ChapterRoutingModule,
    ReactiveFormsModule
  ]
})
export class ChapterModule { }
