import { ReactiveFormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapterRoutingModule } from './chapter-routing.module';
import { ChapterComponent } from './chapter.component';
import { HeaderModule } from 'src/app/components/header/header.module';

@NgModule({
  declarations: [ChapterComponent],
  imports: [
    HeaderModule, 
    CommonModule,
    ChapterRoutingModule,
    ReactiveFormsModule
  ]
})
export class ChapterModule { }
