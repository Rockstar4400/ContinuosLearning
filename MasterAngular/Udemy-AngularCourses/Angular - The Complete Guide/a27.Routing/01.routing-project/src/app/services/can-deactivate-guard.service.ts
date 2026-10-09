import { CanDeactivateFn, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { ServersComponent } from "../servers/servers.component";
import { EditServerComponent } from "../servers/edit-server/edit-server.component";

export const canDeactiveGuard: CanDeactivateFn<EditServerComponent> = (
    component: EditServerComponent,
) => {
    return component.changesSaved 
    ? component.checkChangeSaved() : true;
}