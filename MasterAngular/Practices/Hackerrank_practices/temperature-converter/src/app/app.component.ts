import { Component } from '@angular/core';
import { TemperatureConverter } from './temperatureConverter/temperatureConverter.component';

@Component({
  selector: 'app-root',
  imports: [TemperatureConverter],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hackerrank-temperature-converter';
}
