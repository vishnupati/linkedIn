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
         icon : 'fa fa-home fa-lg',
         url : [
           '/home/user'
         ]
       },
       {
         title : "myNetwork",
         icon : 'fa fa-users fa-lg',
         url : [
           '/'
         ]
       },
       {
         title : "jobs",
         icon : 'fa fa-briefcase fa-lg',
         url : [
           '/'
         ]
       },
       {
         title : "messaging",
         icon : 'fa fa-commenting fa-lg',
         url : [
           '/'
         ]
       },
       {
         title : "notifications",
         icon : 'fa fa-bell fa-lg',
         url : [
           '/'
         ]
       },
       { 
        title : 'me',
        icon : 'fa fa-user-circle fa-lg',
        url : [
             '/admin'
        ],
         subMenus : [
           {
             title : "accoutInfo",
             url : [
               '/home/admin'
             ]
           },
           {
            title : 'signout',
            url : [
              'home/changepassword'
            ]
           }
         ]
       }
    ]
  }
}
