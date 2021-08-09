import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormRegisterUserComponent } from './components/login/form-register-user/form-register-user.component';
import { FormLoginUserComponent } from './components/login/form-login-user/form-login-user.component';

import { ViewStartLabnotesComponent } from './components/login/view-start-labnotes/view-start-labnotes.component';
import { RecoverPasswordComponent } from './components/login/recover-password/recover-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';


import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule} from '@angular/fire/auth';
import { TimelineComponent } from './timeline/timeline.component';



@NgModule({
  declarations: [
    AppComponent,
    FormRegisterUserComponent,
    FormLoginUserComponent,
    ViewStartLabnotesComponent,
    RecoverPasswordComponent,
    LoginComponent,
    RegisterComponent,
    TimelineComponent

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AppRoutingModule,
    ReactiveFormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
