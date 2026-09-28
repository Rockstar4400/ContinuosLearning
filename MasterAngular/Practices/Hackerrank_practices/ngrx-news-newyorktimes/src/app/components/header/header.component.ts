import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nyt-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  ImagePath: string;
  constructor() {
    this.ImagePath = '/assets/images/header.png'
   }

  ngOnInit() {
  }

}
