import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    
  regiForm : FormGroup = new FormGroup ({
     email : new FormControl(),
     password : new FormControl()
  });
  submitted = false;

  constructor(
    private fb : FormBuilder
  ) { 
    
  }

  ngOnInit(): void {
    this.regiForm = this.fb.group({
      email : ["",[Validators.required,Validators.email]],
      password : ["",Validators.required]
    })
  }

  get f() {
      return this.regiForm.controls;
  }

  submit () {
    this.submitted = true ;
    console.log(this.regiForm.value);

  }

}
