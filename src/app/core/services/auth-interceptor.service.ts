import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { AuthService, AuthTokenType } from './auth.service';
// import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { catchError } from '../../../../node_modules/rxjs/operators';
import { Observable } from '../../../../node_modules/rxjs';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector, private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authService = this.injector.get(AuthService);
    const accessToken = authService.getRawAuthToken(AuthTokenType.AccessToken);
    if (accessToken) {
      request = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${accessToken}`)
      });
      return next.handle(request)
        .pipe(catchError((error: any, caught: Observable<HttpEvent<any>>) => {
          if (error.status === 401 || error.status === 403) {
            this.router.navigate(['/accessDenied']);
          }
          return Observable.throw(error);
        }));
    } else {
      // login page
      return next.handle(request);
    }
  }
}
