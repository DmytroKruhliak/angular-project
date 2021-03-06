import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { User } from './user';
import { Observable } from 'rxjs';
import { LoginForm } from '../login/login-form';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrlGet: string = 'http://10.10.21.199:8888/admin/get';
  private baseUrlPost : string = 'http://10.10.21.199:8888/admin/add';
  private baseUrlDelete : string = 'http://10.10.21.199:8888/admin/kill/';
  private baseUrlLogin : string = 'http://10.10.21.199:8888/login';

  constructor(private _httpClien: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this._httpClien.get<User[]>(this.baseUrlGet);
  }

  addUser(user: User) {
       return this._httpClien.post(this.baseUrlPost, user);
  }

  deleteUser(userId: string) {
      return this._httpClien.delete(this.baseUrlDelete + userId);
  } 

  logIn(loginForm: LoginForm): Observable<User> {
      return this._httpClien.post<User>(this.baseUrlLogin, loginForm);
  }
}
