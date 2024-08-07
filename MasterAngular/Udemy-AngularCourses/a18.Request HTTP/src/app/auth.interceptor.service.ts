import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

export class AuthInterceptorService 
implements HttpInterceptor {
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler) 
    {
        const modifiedRequest = 
        req.clone({headers: req.headers.append('Auth','xyz')});
        return next.handle(modifiedRequest).pipe(tap(
            event => {
                if(event.type === HttpEventType.Response){
                    console.log('Response arrive')
                    console.log(event.body)
                }
            }
        ));
    }
}