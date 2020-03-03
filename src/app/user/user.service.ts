import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = 'http://10.10.21.199:8888/admin/get';

  constructor(private _httpClien: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this._httpClien.get<User[]>(this.baseUrl);
  }

  addUser(user: User) {
    let body = JSON.stringify(user);
    let headers = new Headers({'Content-Type': 'application/json'});
    return this._httpClien.post("http://10.10.21.199:8888/admin/add", body);
  }
}
