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
  user = new User();

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

addUser(): void {
  this._userService.addUser(this.user).subscribe((response) => {console.log(response);
  })
}

}
