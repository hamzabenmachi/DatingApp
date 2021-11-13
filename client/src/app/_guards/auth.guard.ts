import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map, Observable } from 'rxjs';
import { AccountService } from '../_servises/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private accountservice: AccountService, private toastr: ToastrService) { }
  canActivate(): Observable<boolean |any> {
    return this.accountservice.currentuser$.pipe(
      map(user => {
        if (user) return true;
        this.toastr.error("You shall not pass");
        return false;
      })
      )
  }
  
}
