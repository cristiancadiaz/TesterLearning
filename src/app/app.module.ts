import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { CollectionService } from './services/collection.service';
import { AuthService } from './services/auth.service';
import { UtilService } from './services/util.service';
import { QuestionComponent } from './components/question/question.component';

@NgModule({
  declarations: [AppComponent, QuestionComponent],
  imports: [
    AppRoutingModule, 
    BrowserModule,
    ReactiveFormsModule, 
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [CollectionService,AuthService, UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
