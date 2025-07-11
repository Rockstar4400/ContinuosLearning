import { Component, OnInit } from '@angular/core';
import { ServersService } from '../services/servers.service';
import { ServerComponent } from './server/server.component';
import { EditServerComponent } from './edit-server/edit-server.component';
import { CommonModule } from '@angular/common';
import { 
  ActivatedRoute, 
  Router, 
  RouterModule 
} from '@angular/router';
import { ObjServer } from '../models/server.model';

@Component({
  selector: 'app-servers',
  standalone: true,
  imports: [
    ServerComponent, 
    EditServerComponent,
    CommonModule,
    RouterModule
  ],
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servers = [ObjServer];

  constructor(
    private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload(){
    this.router
    .navigate(['servers'], 
    {relativeTo: this.route});
  }

}
