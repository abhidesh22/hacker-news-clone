import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class ServiceUnavailableInterceptor implements HttpInterceptor {
  constructor( ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let errorMessage: string = '';
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 503) {
            errorMessage = 'Service not Available';
        } else if (error.status === 504) {
            errorMessage = 'Server Down, please retry after some time!!';
        }

        return throwError(() => new Error(errorMessage));
      })
    );
  }
}
