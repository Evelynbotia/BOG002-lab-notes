import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-view-start-labnotes',
  templateUrl: './view-start-labnotes.component.html',
  styleUrls: ['./view-start-labnotes.component.css']
})
export class ViewStartLabnotesComponent implements OnInit {

  constructor(private authservice:AuthService, private router:Router) { }

  ngOnInit(): void {

  }

  onGoogleLogin(){
    this.authservice.loginWithGoogle()
    .then((res)=>{
      console.log("login con google exitoso", res);
      this.router.navigate(['timeline']);
    })
    .catch((err)=>console.log("login con google no exitoso", err));
  }
}
