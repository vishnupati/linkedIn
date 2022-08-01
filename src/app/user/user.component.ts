import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../api_services/registration.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(
    private regiserv : RegistrationService
  ) { }

  ngOnInit(): void {
    this.regiserv.user$.subscribe((user: any) => {
      console.log('^^^^^^^^^',user)
    })
    // alert("usercomponent1")
  }

}
