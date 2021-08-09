import { AuthService } from 'src/app/auth/services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // if (!this.auth.onLogin()) {
    //   return this.router.navigate(['/login']).then(() => false);
    // }
    // console.log(this.auth.getCurrentUser());
    // return true;



  return this.auth.hasUser().pipe(
          map((user:any) => {
            if (!user){
              window.alert("Acceso denegado, es necesario iniciar sesión para acceder a esta página.");
              this.router.navigate(['/login']);
              return false
            }
            return true
          })
        )
      }
    }

