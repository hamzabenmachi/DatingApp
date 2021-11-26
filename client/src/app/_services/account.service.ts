import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment.prod';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = environment.apiUrl;
  private currentUserSource = new ReplaySubject<User>(1);
  currentuser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) { }
   
  login(model: any) {
    return this.http.post(this.baseUrl + 'account/login', model).pipe(
      map((response : User | any)=> {
        const user = response;
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
       
        }
    })

    )
  }


  register(model : any) {
    return this.http.post(this.baseUrl + 'account/register', model).pipe(
      map((user : User | any )=> {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }

      })
    )

  }


  setCurrentUser(user : User) {
    this.currentUserSource.next(user);
  }

  logout() {
    localStorage.removeItem('user');
    user: null;
    this.currentUserSource.next(null as any);
  }

 
}
