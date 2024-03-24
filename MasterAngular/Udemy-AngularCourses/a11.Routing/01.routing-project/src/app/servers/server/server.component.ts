import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ObjServer } from '../edit-server/server.model';

@Component({
  selector: 'app-server',
  standalone: true,
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server = ObjServer;

  constructor(private serversService: ServersService) { }

  ngOnInit() {
    this.server = this.serversService.getServer(1)!;
  }

}
