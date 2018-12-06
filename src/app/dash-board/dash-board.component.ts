import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { HttpProvidersService } from '../services/user.service';
import { UserService } from '../services/node/user.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  isUser:any;
  user:any;
  userInfos:any = {};

  constructor(private location :Location, private http: HttpProvidersService, private userService: UserService) 
  {
    this.isUser = localStorage.getItem('currentUser'); 
    console.log(localStorage.getItem('currentUser'));
    this.getUserByEmail();

    this.getUserNodeById(3)
    this.getAllUserNode();

  }

  ngOnInit() {
  }


  logout()
  {
    localStorage.removeItem('currentUser');
    console.log(localStorage.getItem('currentUser'));
    location.reload(true);
  }

  getUserByEmail()
  {
    this.userInfos = this.http.getUserByEmail(this.isUser);
    this.userInfos.then(userInfos =>
    {
      this.userInfos = userInfos; 
      console.log('user info couche 1');

      this.userInfos.email = this.userInfos[0]['email'];
      this.userInfos.nom = this.userInfos[0]['nom'];
      this.userInfos.prenom = this.userInfos[0]['prenom'];
      this.userInfos.time_cours = this.userInfos[0]['time_cours'];
      this.userInfos.is_prof = this.userInfos[0]['is_prof'];
      this.userInfos.photo = this.userInfos[0]['photo'];

      console.log(this.userInfos.email);
    })
  }

  private getUserNodeById(id)
  { 
    this.userService.getUserById(id).subscribe((user) => {
      console.log('user node :: ');
      
      console.log(user);
      console.log(user[0]['last_name']);
      
      
    })
  }

  private getAllUserNode()
  {
    this.userService.getAllUser().subscribe((users) => {
      console.log('all users : ');
      console.log(users);  
    })
  }

}
