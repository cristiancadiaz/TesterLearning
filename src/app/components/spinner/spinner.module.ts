import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner.component';
import { SpinnersAngularModule } from 'spinners-angular';


@NgModule({
  declarations: [
      SpinnerComponent
  ],
  imports: [
    CommonModule,
    SpinnersAngularModule
  ],
  exports: [
    SpinnerComponent
  ],
  entryComponents: [
  ],

})
export class SpinnerModule { }
