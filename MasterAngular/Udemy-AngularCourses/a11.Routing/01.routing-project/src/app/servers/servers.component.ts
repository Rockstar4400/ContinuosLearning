import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { ServerComponent } from './server/server.component';
import { EditServerComponent } from './edit-server/edit-server.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-servers',
  standalone: true,
  imports: [
    ServerComponent, 
    EditServerComponent,
    CommonModule
  ],
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

}
