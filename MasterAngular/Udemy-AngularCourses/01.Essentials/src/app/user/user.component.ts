import { Component, computed, output,
   EventEmitter, Input, input, Output } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  // Signals
  // avatar = input.required();
  // name = input.required();


  // imagePath = computed(() =>{
  //   return 'assets/users/' + this.avatar();
  // });

  //select = output<string>();

  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser(){
    this.select.emit(this.user.id);
  }
}
