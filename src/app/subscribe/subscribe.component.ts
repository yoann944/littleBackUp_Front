import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/node/user.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  public subForm: any = {};
  
  constructor(private userServ: UserService) { }

  ngOnInit() {
  }

  public postSubForm()
  {
    console.log(this.subForm);
    if(this.subForm)
    {
      this.userServ.createUser(this.subForm).subscribe((res) => {
        console.log('create user res : ');
        console.log(res);
      })
    }
  }
}
