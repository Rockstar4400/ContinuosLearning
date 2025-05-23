import { HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { tap } from "rxjs/operators";

export class LogginInterceptorService
implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler){
        return next.handle(req).pipe(tap(event => {
            if(event.type === HttpEventType.Response){
                console.log('Incoming Response')
                console.log(event.body)
            }
        }));
    }
}