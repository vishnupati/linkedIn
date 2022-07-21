import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ReggistrationComponent } from './reggistration/reggistration.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
    {
      path : "login",
      component : ReggistrationComponent
    },
    {
      path : "forgot",
      component : ForgotPasswordComponent
    }
];

@NgModule({
  declarations: [
    ReggistrationComponent,
    ForgotPasswordComponent,
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
