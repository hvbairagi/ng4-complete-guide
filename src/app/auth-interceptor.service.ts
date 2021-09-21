import {
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { tap } from 'rxjs/operators';

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (req.url) {
      // to do some operation on a specific url
      // req object is immutable, can't change it
    }
    // can change req object in this way
    const modifiedRequest = req.clone({
      //url: 'some-new-url',
      headers: req.headers.append('Auth', 'xyz'),
    });
    console.log('Request is on its way');
    console.log(req.url);
    return next.handle(modifiedRequest).pipe(
      tap((event) => {
        console.log(event);
        if (event.type === HttpEventType.Response) {
          console.log('Response arrived, body data: ');
          console.log(event.body);
        }
      })
    );
  }
}
