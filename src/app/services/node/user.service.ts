import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  linkAPI:string;
  urlGetUser:string;

  constructor(private http: HttpClient) 
  {
    this.urlGetUser = "http://localhost:3000/api/user/";
  }

  public getUserById(id): Observable<any>
  {
    return this.http.get(this.urlGetUser+id)
  }

  public getAllUser(): Observable<any>
  {
    return this.http.get(this.urlGetUser)
  }
}
