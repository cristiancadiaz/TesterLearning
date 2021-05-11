import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
      HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule  
  ],
  exports: [
    HeaderComponent
  ],
  entryComponents: [],
})
export class HeaderModule { }
