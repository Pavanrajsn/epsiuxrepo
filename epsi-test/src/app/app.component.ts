import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

    endPoint : string = "http://usweb.dotomi.com/resources/swfs/cookies.json";
    data : any = [];

    constructor(private http: HttpClient) {
    }

    ngOnInit(){
      this.http.get(this.endPoint).subscribe((data)=>{
        this.data = data;
      });
    }

}
