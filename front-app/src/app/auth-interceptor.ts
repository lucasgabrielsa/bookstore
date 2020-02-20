import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpRequest, HttpClient, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { HttpInterceptor } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map, retry, catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(public http: HttpClient) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      req = req.clone({
        setHeaders: {
          'Authorization': accessToken
        }
      })
    }

    return next.handle(req).pipe(
      retry(2),
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('event--->>>', event);

          if (event.status === 201) {
            console.log('Response Code 201');
          }

        }
        return event;
      }));

  }
}



