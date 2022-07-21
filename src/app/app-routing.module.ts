import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReggistrationComponent } from './auth/reggistration/reggistration.component';

const routes: Routes = [
  {
    path : "", redirectTo : "login" ,pathMatch : "full"
  },
  {
    path : "login" , component : ReggistrationComponent
  },
  {
    path : "home", loadChildren : () => import ("./home/home.module").then(home => home.HomeModule)
  },
  {
    path : "auth", loadChildren : () => import ("./auth/auth.module").then(auth => auth.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
