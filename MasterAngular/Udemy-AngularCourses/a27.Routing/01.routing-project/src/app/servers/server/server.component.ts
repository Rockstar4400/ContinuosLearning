import { Component, OnInit } from '@angular/core';

import { ServersService } from '../../services/servers.service';
import { ObjServer } from '../../models/server.model';
import { 
  ActivatedRoute, 
  Params, 
  Router 
} from '@angular/router';

@Component({
  selector: 'app-server',
  standalone: true,
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server = ObjServer;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.route.params.subscribe(
      (params: Params) => {
        this.server = this.serversService
        .getServer(+params['id']);
      }
    )
  }
  
  onEdit(){
    this.router.navigate(['edit'], 
      { relativeTo: this.route, 
        queryParamsHandling: 'preserve' })
  }
}
