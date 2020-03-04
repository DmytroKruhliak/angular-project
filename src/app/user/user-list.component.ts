import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  cuser = new User();

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
    console.log(this.cuser);
    this._userService.addUser(this.cuser).subscribe((response) => {
      console.log(response);
      this.userList();
    })
  }

  deleteUser(userId: string) {
    this._userService.deleteUser(userId).subscribe((response) => {
      console.log(response);
      this.userList();
    })
  }

}
