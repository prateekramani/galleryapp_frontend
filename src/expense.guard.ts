import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './app/services/auth.service';



@Injectable({
  providedIn: 'root'
})
export class ExpenseGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      let url: string = state.url;

      return this.checkLogin(url);
      // return true;
  }

  checkLogin(url: string): any {
    console.log("Url: " + url)
    let val: any = localStorage.getItem('isUserLoggedIn');

    if(val != null && val == "true"){
       if(url == "/login")
          this.router.navigate(['/home']);
       else 
          return true;
    } else {
       return this.router.navigate(['/login']);
    }
 }
  
}
