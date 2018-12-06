import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { HttpProvidersService } from '../services/user.service';

@Component({
  selector: 'app-stream-broard',
  templateUrl: './stream-broard.component.html',
  styleUrls: ['./stream-broard.component.css']
})
export class StreamBroardComponent implements OnInit {
  @ViewChild('video') video:any;

  userInfos:any = {};
  isUser:any;

  ngOnInit() {
  }
  constructor(private http: HttpProvidersService) 
  {
    alert('Veuillez mettre un casque pour une meilleur interaction !');
    this.isUser = localStorage.getItem('currentUser'); 
    this.getUserByEmail();
  }

  ngAfterViewInit() {
    let _video=this.video.nativeElement;
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
                            .then(stream => {
                              _video.src = window.URL.createObjectURL(stream);
                              _video.play();
                            })
    }
  }

  getUserByEmail()
  {
    this.userInfos = this.http.getUserByEmail(this.isUser);
    this.userInfos.then(userInfos =>
    {
      this.userInfos = userInfos; 
      console.log('user info couche 1');
      this.userInfos.is_prof = this.userInfos[0]['is_prof'];
    })
  }

}
