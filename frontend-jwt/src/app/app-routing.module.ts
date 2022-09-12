import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Imports lógica del Usuario
import { LoginComponent } from './public/login/login.component';
import { SignupComponent } from './public/signup/signup.component';
import { ProfileComponent } from './public/profile/profile.component';

const routes: Routes = [
  //Enrutado lógica del Usuario
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
