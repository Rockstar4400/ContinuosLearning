import { inject, Injectable, signal } from "@angular/core";
import { 
    ActivatedRouteSnapshot, 
    CanActivateChildFn, 
    CanActivateFn, 
    Router, 
    RouterStateSnapshot,
    UrlTree
} from "@angular/router";
import { Observable } from "rxjs";

export const AuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
):
  Observable<boolean | UrlTree> 
  | Promise<boolean | UrlTree> 
  | boolean 
  | UrlTree=> {

  return inject(TokenService).authenticated()
    ? true
    : inject(Router).createUrlTree(['/']);

};

@Injectable({'providedIn': 'root'})
export class TokenService {
  authenticated = signal(false);
}