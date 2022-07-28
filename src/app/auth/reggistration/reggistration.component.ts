import { Component, OnInit } from '@angular/core';
import { SignupComponent } from 'src/app/shared-ui-component/signup/signup.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/api_services/registration.service';

@Component({
  selector: 'app-reggistration',
  templateUrl: './reggistration.component.html',
  styleUrls: ['./reggistration.component.scss']
})
export class ReggistrationComponent implements OnInit {
  
  regiForm : FormGroup;
  submitted = false;
  showPage = true;
  showPasswordOnPress = false;

  constructor(
    private ngb : NgbModal,
    private fb : FormBuilder,
    private route : Router,
    private regiServ : RegistrationService
  ) { 
    this.regiForm = this.fb.group({
      email : ["",[Validators.required,Validators.email]],
      password : ["",[Validators.required,Validators.minLength(6)]]
    })
  }

  ngOnInit(): void {
  }

  get f() {
    return this.regiForm.controls;
}
  signUp() {
    this.showPage = false;
    
  }
  
  signIn () {
    // const modalRef = this.ngb.open(SignupComponent,{
    //   size : "md"
    // });

  }

submit () {
  if (this.regiForm.invalid) {
    this.submitted = true ;
    return ;
  }
  // console.log(this.regiForm.value);
  this.regiServ.createAccount(this.regiForm.value).subscribe(res => {
    console.log('sign',res.data)
    this.route.navigate(["home/user"]);
  })
}

}
