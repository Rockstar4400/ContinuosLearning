import { Component, OnInit } from '@angular/core';

import { ServersService } from '../../services/servers.service';
import { ObjServer } from '../../models/server.model';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-server',
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
  standalone: true
})

export class EditServerComponent implements OnInit {
  server = ObjServer;
  serverName = '';
  serverStatus = '';
  allowEdit = false;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(
      (queryParams: Params) =>{
        this.allowEdit = 
        queryParams['allowEdit'] 
        === '1' ? true : false;
      }
    );
    this.route.fragment.subscribe();
    this.server = this.serversService.getServer(1);
    this.serverName = this.server!.name;
    this.serverStatus = this.server!.status;
  }

  onUpdateServer() {
    this.serversService
    .updateServer(this.server!.id, 
      { name: this.serverName!, status: this.serverStatus!});
  }

}
