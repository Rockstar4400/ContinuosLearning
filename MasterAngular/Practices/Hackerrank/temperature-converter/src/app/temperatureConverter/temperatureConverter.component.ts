import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
@Component({
  selector: "temperature-converter",
  templateUrl: "./temperatureConverter.component.html",
  styleUrls: ["./temperatureConverter.component.scss"],
  imports: [FormsModule]
})
export class TemperatureConverter implements OnInit {
  
  Celsius = '';
  Fahrenheit = '';

  ngOnInit() {}

  c_Fahrenheit(event: Event){
    //(°F) - 32) * 5/9
    const c_converted = (<HTMLInputElement>event.target).valueAsNumber * 9/5 + 32;
    
    this.Fahrenheit = c_converted.toString();
  }

  c_Celsius(event: Event){
    //(°C) * 9/5) + 32
    const c_converted = (<HTMLInputElement>event.target).valueAsNumber - 32 * 5/9;
    this.Celsius = c_converted.toString();
  }

}