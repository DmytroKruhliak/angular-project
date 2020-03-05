import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginForm } from './login-form';
import { User } from '../user/user';
import { UserService } from '../user/user.service';
import { UserListComponent } from '../user/user-list.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  currentUser = new User();
  loginForm = new LoginForm();

  constructor(private _userService: UserService,private hide: UserListComponent) { }

  ngOnInit(): void {
  }

  tryToLogIn() {
    this._userService.logIn(this.loginForm).subscribe((response) => {
      this.currentUser = response;
      this.hide.toggleForm();
      console.log(response);
    })
  }
}
