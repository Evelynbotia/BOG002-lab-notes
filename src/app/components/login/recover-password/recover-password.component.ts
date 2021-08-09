import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css'],
  providers: [AuthService],

})
export class RecoverPasswordComponent implements OnInit {
 recoverForm = new FormGroup({
   email: new FormControl(''),
 })

  constructor(private authservice: AuthService) { }

 ngOnInit(): void {
  }
 onReset(){
   console.log("correo enviado")
   const{email} =this.recoverForm.value;
   this.authservice.resetPassword(email);
 }
}
