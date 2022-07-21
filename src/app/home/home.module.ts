import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../core/core.module';

const route : Routes =  [
    {
      path : "",
      component : HomeComponent,
      children : [
        {
          path : " " , redirectTo : "user" , pathMatch : "full"
        },
        {
          path : "user" , loadChildren : () => import("../user/user.module").then(user => user.UserModule),
        },
        {
          path : "admin", loadChildren : () => import("../admin/admin.module").then(admin => admin.AdminModule)
        }
      ]
    }
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    CoreModule
  ]
})
export class HomeModule { }
