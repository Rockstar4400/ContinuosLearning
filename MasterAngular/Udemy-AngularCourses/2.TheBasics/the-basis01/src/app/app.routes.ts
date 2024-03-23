import { Routes } from '@angular/router';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

export const routes: Routes = [
    { path:'app-server', title: "Server Page", component: ServerComponent },
    { path:'app-servers', title: "Servers Page", component: ServersComponent }
];
