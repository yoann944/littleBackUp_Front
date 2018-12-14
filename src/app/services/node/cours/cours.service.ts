import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CoursService {

  private url: string = 'http://localhost:3000/cours/';
  constructor(private http: HttpClient) { }

  getAllCours(): Observable<any>
  {
    return this.http.get(this.url)
  }
}
