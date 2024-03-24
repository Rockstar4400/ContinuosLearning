import { Component, OnInit } from '@angular/core';
import { ObjUser } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  standalone: true
})

export class UserComponent implements OnInit {
  user = ObjUser;

  constructor() { }

  ngOnInit() {
  }

}
