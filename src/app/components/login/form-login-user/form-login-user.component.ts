import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { userI } from 'src/assets/interfaceUser';

@Component({
  selector: 'app-form-login-user',
  templateUrl: './form-login-user.component.html',
  styleUrls: ['./form-login-user.component.css'],
  providers: [AuthService],
})
export class FormLoginUserComponent implements OnInit {
   loginForm= new FormGroup({
     email: new FormControl(''),
     password: new FormControl(''),
   })


  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  // onLogin(){
  //   console.log("ingresoUsuario")
  // //  console.log("form-->", this.loginForm.value);
  // const {email, password} = this.loginForm.value;
  // this.authservice.login(email, password);


  // }
  onLogin(form: userI) {
    this.authservice
      .loginByEmail(form)
      .then((res) => {
        console.log('login exitoso', res);
        this.router.navigate(['/timeline']);
      })
      .catch((err) => console.log('login no exitoso', err));
  }

}
