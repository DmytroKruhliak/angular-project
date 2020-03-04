import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/user.service';
import { User } from 'src/app/user/user';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css']
})
export class CreatePageComponent implements OnInit {
  
  value: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onChange(event) {
    this.value = event.target.value;
    alert(this.value);
  }

  onSubmit(user: User) {
    this.userService.addUser(user);
  }
}
