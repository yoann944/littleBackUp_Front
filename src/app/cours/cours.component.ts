import { Component, OnInit } from '@angular/core';
import { CoursService } from '../services/node/cours/cours.service';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {

  constructor(private coursServ: CoursService) { }

  ngOnInit() {
  }


  private getAllCours()
  {
    this.coursServ.getAllCours().subscribe((cours) => {
      console.log(cours);      
    })
  }
}
