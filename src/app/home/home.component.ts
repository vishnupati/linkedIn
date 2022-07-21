import { Component, OnInit } from '@angular/core';
import { MenuService } from '../core/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  navItem : any[] = [];

  constructor(
    private menuServ : MenuService
  ) { }

  ngOnInit(): void {
    this.getMenu();
  }
  
  public getMenu () {
  this.navItem = this.menuServ.getUserMenu()
    
  }

}
