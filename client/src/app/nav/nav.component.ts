import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../_models/user';
 
import { AccountService } from '../_servises/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],

})
export class NavComponent implements OnInit {
  model: any = {}
  currentuser$: Observable<User> | undefined;
  loggedIn: boolean | undefined ;
  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
    this.currentuser$ = this.accountService.currentuser$;
  }

  login() {

    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
       
    }, error => {
      console.log(error);
    }

    )
   
  }

  logout() {
    this.accountService.logout();
    this.loggedIn = false;
  }

}
