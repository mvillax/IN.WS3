import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from "@angular/common/http";


@Component({
  selector: 'app-weather5',
  templateUrl: './weather5.component.html',
  styleUrls: ['./weather5.component.css']
})
export class Weather5Component implements OnInit {


  city:string= 'verkhoyansk,ru';

  view: any[] = [500, 500];

  // options for the chart
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Number';
  showYAxisLabel = true;
  yAxisLabel = 'Value';
  timeline = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;

  //pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;
  weatherInfo;
  temperatureData;
  humidityData;
  pressureData;
  
  constructor(private http: HttpClient) { }


  ngOnInit() {
    this.getData()
  }

  getData () {
    this.http.get("https://api.openweathermap.org/data/2.5/forecast?q=" + this.city + "&units=metric&appid=41f2ca6a8f294e959941fa20fe1edae3").subscribe(dataInfo => {
      this.weatherInfo = dataInfo
      this.mapGraphData(dataInfo)
      
    })
  }

  mapGraphData(dataInfo) {

    this.temperatureData = [
        {
          name:"Temperature",  
          series: []
        }
      ]
    this.humidityData = [
        {
          name:"Humidity %",  
          series: []
        }
      ]
    this.pressureData = [
        {
          name:"Pressure",  
          series: []
        }
      ]

    this.temperatureData[0].series = dataInfo.list
      .map(item => {  
        return {
            "name": item.dt_txt,
            "value": item.main.temp }
      })

    this.humidityData[0].series = dataInfo.list
      .map(item => {  
        return {
            "name": item.dt_txt,
            "value": item.main.humidity }
      })
      
    this.pressureData[0].series = dataInfo.list
      .map(item => {  
        return {
            "name": item.dt_txt,
            "value": item.main.pressure }
      })
  }
  onSelect (e) {
    
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
