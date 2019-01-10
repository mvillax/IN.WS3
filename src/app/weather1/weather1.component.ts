import { Component, OnInit } from '@angular/core';
// New
import {HttpClient, HttpParams, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-weather1',
  templateUrl: './weather1.component.html',
  styleUrls: ['./weather1.component.css']
})
export class Weather1Component implements OnInit {

  constructor(private http: HttpClient) { }

  public weatherInfo;

  ngOnInit() {
    this.http.get("https://api.openweathermap.org/data/2.5/forecast?q=London,uk&units=metric&appid=41f2ca6a8f294e959941fa20fe1edae3").subscribe(dataInfo => {
      this.weatherInfo = dataInfo
      console.log(dataInfo)
    })
  }
  selectClass (temperature) {

    var response = '';
    if (temperature > 10 ) {
       response = 'hot';
    } else if ( temperature < 5 ) {
       response = 'cold';
    } else {
       response = 'mild';
    }
    return response;
  }
}
