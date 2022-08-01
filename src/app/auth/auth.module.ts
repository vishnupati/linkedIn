import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ReggistrationComponent } from './reggistration/reggistration.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
    {
      path : "login",
      component : ReggistrationComponent
    },
    {
      path : "forgot",
      component : ForgotPasswordComponent
    },
    {
      path : "signin",
      component : SignInComponent
    }
];

@NgModule({
  declarations: [
    ReggistrationComponent,
    ForgotPasswordComponent,
    SignInComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AuthModule { }
