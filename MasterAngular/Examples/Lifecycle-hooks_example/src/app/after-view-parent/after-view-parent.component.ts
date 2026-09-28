
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LoggerService } from "../services/logger.service";

import { AfterViewComponent } from "./after-view.component";

//////////////
@Component({
  selector: 'after-view-parent',
  templateUrl: './after-view-parent.component.html',
  styles: ['.parent {background: burlywood}'],
  providers: [LoggerService],
  imports: [AfterViewComponent, CommonModule]
})
export class AfterViewParentComponent {
  show = true;

  constructor(public logger: LoggerService) {
  }

  reset() {
    this.logger.clear();
    // quickly remove and reload AfterViewComponent which recreates it
    this.show = false;
    this.logger.tick_then(() => this.show = true);
  }
}
