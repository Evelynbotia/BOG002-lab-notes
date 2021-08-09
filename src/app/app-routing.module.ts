import { TimelineComponent } from './timeline/timeline.component';
import { RecoverPasswordComponent } from './components/login/recover-password/recover-password.component';
import { FormRegisterUserComponent } from './components/login/form-register-user/form-register-user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { FormLoginUserComponent } from './components/login/form-login-user/form-login-user.component';
import { ViewStartLabnotesComponent } from './components/login/view-start-labnotes/view-start-labnotes.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ViewStartLabnotesComponent
  },
  {
    path: 'login',
    pathMatch: 'full',
    component: FormLoginUserComponent
  },
  {
    path: 'register',
    pathMatch: 'full',
    component: FormRegisterUserComponent
  },
  {
    path: 'recoverPassword',
    pathMatch: 'full',
    component: RecoverPasswordComponent
  },
  {
    path: 'timeline',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    component: TimelineComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
