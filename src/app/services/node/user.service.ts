import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  linkAPI:string;
  urlUser:string;

  constructor(private http: HttpClient) 
  {
    this.urlUser = "http://localhost:3000/api/user/";
  }

  public getUserById(id): Observable<any>
  {
    return this.http.get(this.urlUser+id);
  }

  public getAllUser(): Observable<any>
  {
    return this.http.get(this.urlUser);
  }

  public createUser(user: any): Observable<any>
  {
    return this.http.post(this.urlUser, JSON.stringify(user));
  }

  public updateUser(user): Observable<any>
  {
    return this.http.put(this.urlUser, JSON.stringify(user));
  }

  public deleteUser(id: string): Observable<any>
  {
    return this.http.delete(this.urlUser+id);
  }
}
