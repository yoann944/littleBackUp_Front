import { Component, OnInit } from '@angular/core';
import { HttpProvidersService } from '../services/user.service';
import { UserService } from '../services/node/user.service';

@Component({
  selector: 'app-modif-profil',
  templateUrl: './modif-profil.component.html',
  styleUrls: ['./modif-profil.component.css']
})
export class ModifProfilComponent implements OnInit {

  isUser:any;
  userInfos:any = {};
  constructor(private http: HttpProvidersService, private userServ: UserService) 
  {
    this.isUser = localStorage.getItem('currentUser'); 
    this.getUserByEmail();
  }

  ngOnInit() {
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

  private updateUser()
  {
    this.userServ.updateUser(this.userInfos).subscribe((res) => {
      console.log('update user res : ');
      console.log(res);
    })
  }

  private delteUser(id: string)
  {
    this.userServ.deleteUser(id).subscribe((res) => {
      console.log('delete user id : '+id);
      console.log('response delete user :');
      console.log(res);
    })
  }
}
