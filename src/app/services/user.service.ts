import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpProvidersService {

  linkAPI:string;
  urlGetUser:string;

  constructor(private http: HttpClient) 
  {
    this.urlGetUser = "http://localhost/StreamApp/src/API/user/getUserByEmail.php";
  }

  loginBDD(username, password)
  {
    console.log('services : ');
    console.log('username : '+username+ ' passwd '+password);

    this.linkAPI = 'http://localhost/streamApp/src/API/user/login.php';

    var objet = {
      "email": username,
      "password": password,
    };

    return new Promise(resolve =>
    {
      this.http.post( this.linkAPI, objet)
      .subscribe(
          res => {
            console.log('success data post');
            console.log(res);
            resolve(res);
          },
          err => {
            console.log("Error occured : ");
            console.log(err);
          }
        );
    })
  }

  getUserByEmail(email)
  {
    var objet = {
      "email": email,
    };
    
    return new Promise(resolve => 
    {
      this.http.post(this.urlGetUser, objet)
      .subscribe(
        res => {
          console.log('success data post');
          console.log(res);
          resolve(res);
        },
        err => {
          console.log("Error occured : ");
          console.log(err);
        }
      );
    }); 
  }
}
