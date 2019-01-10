import { Component, OnInit } from '@angular/core';
// New
import {HttpClient, HttpParams, HttpHeaders} from "@angular/common/http";


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherInfo;
 constructor(private http: HttpClient) { }


  ngOnInit() {

    debugger    
    this.http.get("https://api.openweathermap.org/data/2.5/forecast?q=London,uk&units=metric&appid=41f2ca6a8f294e959941fa20fe1edae3").subscribe(dataInfo => {
      this.weatherInfo = dataInfo
      console.log(dataInfo)
    })
  }

}
