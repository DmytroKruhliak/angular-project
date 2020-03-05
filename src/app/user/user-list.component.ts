import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';
import { LoginForm } from '../login/login-form';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  logged: boolean = false;
  users: User[];
  newUser = new User();

  constructor(private _userService: UserService) {

  }

  ngOnInit(): void {
    this.userList();
  }

  userList() {
    this._userService.getAllUsers().subscribe(
      data => this.users = data
    )
  }

  addUser() {
    
    console.log(this.newUser);

    this._userService.addUser(this.newUser).subscribe((response) => {
      console.log(response);
      this.userList();
    })
  }

  deleteUser(userId: string) {
    if (confirm("Delete user with id: " + userId)) {
      this._userService.deleteUser(userId).subscribe((response) => {
        console.log(response);
        this.userList();
      })
    }
  }

  public toggleForm() {
    this.logged = !this.logged;
 }

}
