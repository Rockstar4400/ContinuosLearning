
import { Service } from "@angular/core";

@Service()
export class LoggingService {
    logStatusChange(status: string, name: string){
        console.log(name + ' status changed, new status: '+ status);
    }

    logAccountAdded(name: string, status: string){
        console.log(name + ' Account was added with status: ' + status)
    }
}