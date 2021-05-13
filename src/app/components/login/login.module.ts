import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import { SpinnerModule } from '../spinner/spinner.module';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
  ],
  entryComponents: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    FormsModule,
    RouterModule,
    CommonModule,
    SpinnerModule,
    ReactiveFormsModule    
  ],
  exports: [
    LoginComponent,
    SignupComponent
  ],

})
export class LoginModule { }
