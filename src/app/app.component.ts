import { Component } from '@angular/core';
import { UserService } from './services/node/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  activeHeader: boolean;
  public date: any;
  public firstName: any;
  public coins: any;

  constructor(private userServ: UserService)
  {
    this.date = new Date().toLocaleDateString();
    this.getUserById('5c093c7a4c0e3210f8e9da17');
  }

  private getUserById(id: any)
  {
    this.userServ.getUserById(id).subscribe((res) => {
      console.log(res);
      this.firstName = res['firstName'];
      this.coins = res['coursesTime'];
    })
  }
}


