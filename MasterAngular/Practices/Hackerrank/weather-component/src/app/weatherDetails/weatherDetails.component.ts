import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "weather-details",
  templateUrl: "./weatherDetails.component.html",
  styleUrls: ["./weatherDetails.component.scss"],
  imports: [CommonModule]
})
export class WeatherDetails implements OnInit {

  ngOnInit() {}
 
}

