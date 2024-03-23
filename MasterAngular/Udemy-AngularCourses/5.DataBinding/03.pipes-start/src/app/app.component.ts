import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ShortenPipe } from './shorten.pipe';
import { FilterPipe } from './filter.pipe';
import { ObjServer } from './servers.model';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    FormsModule, 
    CommonModule, 
    ShortenPipe, 
    FilterPipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  appStatus = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('stable');
    }, 2000);
  });

  servers = ObjServer;
  filteredStatus = '';

  getStatusClasses(server: {
    instanceType: string;
    name: string;
    status: string;
    started: Date;
  }) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical',
    };
  }

  onAddServer() {
    ObjServer.push({
      instanceType: 'small',
      name: this.filteredStatus,
      status: 'stable',
      started: new Date(),
    });
    this.filteredStatus = '';
  }
}