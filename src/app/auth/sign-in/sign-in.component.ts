import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/api_services/registration.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  

  submitted = false;
  logInForm : FormGroup;

  constructor(
    private fb : FormBuilder,
    private regiserv : RegistrationService,
    private route : Router
  ) {
    this.logInForm = this.fb.group({
       email : ["",[Validators.required,Validators.email]],
       password : ["",[Validators.required,Validators.minLength(6)]]
    })
   }
  
  get f () {
    return this.logInForm.controls;
  }
  
  ngOnInit(): void {
  }

  public submit () {
    if (this.logInForm.invalid) {
      this.submitted = true;
      return;
    }
    this.regiserv.login(this.logInForm.value).subscribe(res => {
      console.log("loginInfo",res);
      if (res.status === 200) {
          this.route.navigate(['/home/user']);
      }
    })
  }

  public forgotPass () {
    
  }

}
