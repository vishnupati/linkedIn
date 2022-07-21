import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }
   
  public getUserMenu () {
    return  [
       {
         title : "home",
         url : [
           'home/user'
         ]
       },
       {
         subMenu : [
           {
             title : "accoutInfo",
             url : [
               '/'
             ]
           }
         ]
       }
    ]
  }
}
