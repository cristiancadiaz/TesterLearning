import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { CollectionService } from './services/collection.service';
import { AuthService } from './services/auth.service';
import { UtilService } from './services/util.service';
import { SpinnerModule } from './components/spinner/spinner.module';



@NgModule({
  declarations: [AppComponent],
  imports: [
    SpinnerModule,
    AppRoutingModule, 
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule, 
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  exports: [],
  providers: [CollectionService,AuthService, UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
