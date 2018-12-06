import { Component, OnInit } from '@angular/core';
import { HttpProvidersService } from '../services/user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:any = {}
  user:any;

  constructor(private httpProvider: HttpProvidersService, private location: Location) 
  {
    this.user = localStorage.getItem('currentUser');
    if(this.user)
      //this.location.go('dashBoard');
      window.location.href='dashBoard';
  }

  ngOnInit() {
  }

  logForm()
  {
    if(this.loginForm.username && this.loginForm.password){
  this.httpProvider.loginBDD(this.loginForm.username, this.loginForm.password)
  .then(res => 
        {
          console.log('promise : ');
          console.log(res);
          if(res === 1)
            this.location.go('/');
            //this.location.go('/dashBoard')
            this.location.back();
            localStorage.setItem('currentUser', this.loginForm.username);
        })
    }
    else{
      alert('Email ou mot de passe incomplet');
    }
  }
}
