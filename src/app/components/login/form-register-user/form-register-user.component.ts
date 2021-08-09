import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-form-register-user',
  templateUrl: './form-register-user.component.html',
  styleUrls: ['./form-register-user.component.css'],
  providers:[AuthService],
})

export class FormRegisterUserComponent implements OnInit {
    registerForm = new FormGroup({
    usuario: new FormControl(''),
    email:new FormControl(''),
    password: new FormControl(''),
  })
  constructor(private authservice:AuthService) { }

  ngOnInit(): void {
  }
  onRegister(){
    // console.log('form-->', this.registerForm.value);
    // let {email, password} = this.registerForm.value
    // this.authservice.doRegister(email , password)
    const {email, password, usuario} = this.registerForm.value;
    this.authservice.register(email, password, usuario);
  }

}
