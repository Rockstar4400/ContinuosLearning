import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'weather-details',
  templateUrl: './weatherDetails.component.html',
  styleUrls: ['./weatherDetails.component.scss'],
  imports: [CommonModule, FormsModule, CommonModule],
})
export class WeatherDetails implements OnInit {
  City = '';
  humidity = '';
  wind = '';
  temperature = '';
  counter = 0;
  @Input() weatherData: weatherData[] = [{}];

  ngOnInit() {}

  search(event: Event) {
    
    let filteredCity = this.weatherData.filter((city) => {
      return (
        city.name!.toLocaleLowerCase() ===
        (<HTMLInputElement>event.target).value.toLocaleLowerCase()
      );
    });
    this.counter = filteredCity.length;
    if(filteredCity.length > 0){
      this.humidity = filteredCity[0].humidity!;
      this.wind = filteredCity[0].wind!;
      this.temperature = filteredCity[0].temperature!;
    }
  }
}

interface weatherData {
  name?: string;
  wind?: string;
  temperature?: string;
  humidity?: string;
}
