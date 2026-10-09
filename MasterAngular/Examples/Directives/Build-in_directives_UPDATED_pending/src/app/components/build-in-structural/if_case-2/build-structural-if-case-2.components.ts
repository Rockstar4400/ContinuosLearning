import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'build-structural-if-case-2',
  styleUrl: './build-structural-if-case-2.components.css',
  templateUrl: './build-structural-if-case-2.components.html',
})
export class BuildStructuralIfCase2 {
  @Input() ChildCurrentCustomer = {
    name: ''
  };
  @Input() ChildNullCustomer: string | null = null;

  giveNullCustomerValue() {
    this.ChildNullCustomer = 'Kelly';
  }
}
