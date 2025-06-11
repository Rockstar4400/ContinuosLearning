import { Component, OnInit } from '@angular/core';

import { ServersService } from '../../services/servers.service';
import { ObjServer } from '../../models/server.model';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  imports: [FormsModule],
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
  standalone: true
})

export class EditServerComponent implements OnInit {
  server = ObjServer;
  serverName = '';
  serverStatus = '';

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe();
    this.route.fragment.subscribe();
    this.server = this.serversService.getServer(1)!;
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
