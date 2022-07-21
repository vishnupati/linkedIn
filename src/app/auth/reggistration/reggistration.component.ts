import { Component, OnInit } from '@angular/core';
import { SignupComponent } from 'src/app/shared-ui-component/signup/signup.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    private route : Router
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
  this.submitted = true ;
  if (this.regiForm.valid) {
    console.log(this.regiForm.value);
    this.route.navigate(["home/user"]);
  }
}

}
