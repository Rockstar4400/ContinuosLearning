import { CommonModule } from "@angular/common";
import { LoggerService } from "../services/logger.service";
import { ChildComponent } from "./after-content-child/after-content-child";
import { AfterContentComponent } from "./after-content/after-content";
import { Component } from "@angular/core";

@Component({
  selector: 'after-content-parent',
  templateUrl: './after-content-parent.component.html',
  styles: ['.parent {background: burlywood}'],
  providers: [LoggerService],
  imports: [ChildComponent, AfterContentComponent, CommonModule]
})
export class AfterContentParentComponent {
  show = true;

  constructor(public logger: LoggerService) {
  }

  reset() {
    this.logger.clear();
    // quickly remove and reload AfterContentComponent which recreates it
    this.show = false;
    this.logger.tick_then(() => this.show = true);
  }
}
