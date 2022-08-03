import { CursorError } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit , Input} from '@angular/core';
import { Route, Router , ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() navItem : any ;
  isShown = false;

  constructor(
    private router : Router,
    // private router : ActivatedRoute
  ) { }

  ngOnInit(): void {
    // console.log('navitem',this.navItem)
  }
  // public isActiveTopMenu(item: any): boolean {
  //   const currentUrl = this.router.url.split('home/');
  //   // console.log('url',currentUrl)
  //   if (currentUrl?.length && item?.subMenus) {
  //     const finds = item.subMenus.find((subMenu : any) => currentUrl[1].includes(subMenu.url[0]));
  //     return finds;
  //   }
  //   return false;
  // }
  
}
