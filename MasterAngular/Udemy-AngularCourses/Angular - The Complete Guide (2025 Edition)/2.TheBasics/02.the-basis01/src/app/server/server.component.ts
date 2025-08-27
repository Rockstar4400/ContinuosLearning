import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'app-server',
    imports: [CommonModule],
    templateUrl: './server.component.html',
    standalone: true,
    styles:[`
    online 
        color: white
    
    `]
})

export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'offline';

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus(){
        return this.serverStatus;
    }

    getColor(){
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}