import { AuthService } from 'src/app/auth/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
  providers:[AuthService]
})
export class TimelineComponent implements OnInit {

 public user: any;

  constructor(private authservice:AuthService,  private router:Router) { }

   ngOnInit():void {
    console.log('timeline');
    this.user = this.authservice.getCurrentUser();
    if(this.user){
      // console.log('user-->', JSON.stringify(this.user));
      console.log('user2-->', this.user);
    }
  }

  onLogout(){
    this.authservice
    .logout()
    .then((res) => {
      console.log('sesión cerrada', res);
      this.router.navigate(['/login']);
    })
    .catch((er) => console.log('no se puede cerrar sesión', er));
  }
}

