import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

//////////////////
@Component({
  selector: 'app-child-view',
  templateUrl: '../after-view-parent/app-child-view.html',
  imports: [FormsModule]
})
export class ChildViewComponent {
  hero = 'Magneta';
}