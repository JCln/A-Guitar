import { Injectable, Inject } from '@angular/core';
import { BrowserStorageService } from '../browser-storage.service';
import { APP_CONFIG, IAppConfig } from './app.config';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Credentials } from '../models/credentials';
import * as jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { AuthUser } from '../models/auth-user.service';
import { BehaviorSubject, Observable, Subscription, throwError } from '../../../../node_modules/rxjs';
import { catchError, finalize, map } from 'rxjs/operators';

export enum AuthTokenType {
  AccessToken,
  RefreshToken
}

@Injectable()
export class AuthService {
  private rememberMeToken = 'rememberMe_token';

  private authStatusSource = new BehaviorSubject<boolean>(false);
  authStatus$ = this.authStatusSource.asObservable();

  private refreshTokenSubscription: Subscription;

  constructor(
    @Inject(APP_CONFIG) private appConfig: IAppConfig,
    private http: HttpClient,
    private router: Router,
    private browserStorageService: BrowserStorageService
  ) {
    this.updateStatusOnPageRefresh();
    // this.scheduleRefreshToken();
  }

//   login(credentials: Credentials): Observable<boolean> {
//     const headers = new HttpHeaders({ "Content-Type": "application/json" });
//     return this.http
//       .post(`${this.appConfig.apiEndpoint}/${this.apiConfigService.configuration.loginPath}`,
//         credentials, { headers: headers })
//       .pipe(
//         map((response: any) => {
//           this.tokenStoreService.setRememberMe(credentials.rememberMe);
//           if (!response) {
//             console.error("There is no `{'" + this.apiConfigService.configuration.accessTokenObjectKey +
//               "':'...','" + this.apiConfigService.configuration.refreshTokenObjectKey + "':'...value...'}` response after login.");
//             this.authStatusSource.next(false);
//             return false;
//           }
//           this.tokenStoreService.storeLoginSession(response);
//           console.log("Logged-in user info", this.getAuthUser());
//           this.refreshTokenService.scheduleRefreshToken(true);
//           this.authStatusSource.next(true);
//           return true;
//         }),
//         catchError((error: HttpErrorResponse) => throwError(error))
//       );
//   }

  login(credentials: Credentials): Observable<boolean> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
      .post(`${this.appConfig.apiEndpoint}/${this.appConfig.loginPath}`, credentials, { headers: headers })
      .pipe(map((response: any) => {
        this.browserStorageService.setLocal(this.rememberMeToken, credentials.rememberMe);
        if (!response) {
          this.authStatusSource.next(false);
          return false;
        }
        this.setLoginSession(response);
        this.authStatusSource.next(true);
        return true;
        // }) , catchError((error: HttpErrorResponse) => Observable.throw(error)));
      }), catchError((error: HttpErrorResponse) => Observable.throw(error)));
  }

  logout(navigateToHome: boolean): void {
    this.http
      .get(`${this.appConfig.apiEndpoint}/${this.appConfig.logoutPath}`)
      .pipe(finalize(() => {
        this.deleteAuthTokens();
        this.unScheduleRefreshToken();
        this.authStatusSource.next(false);
        if (navigateToHome) {
          // this.router.navigate(['/']);
          this.router.navigate(['./WPage']);
        }
      })
        , map(response => response || {})
        , catchError((error: HttpErrorResponse) => Observable.throw(error))
        // , subscribe(result => {
        //   console.log('logout', result);
        // })
        );
  }

  rememberMe(): boolean {
    return this.browserStorageService.getLocal(this.rememberMeToken) === true;
  }

  getRawAuthToken(tokenType: AuthTokenType): string {
    if (this.rememberMe()) {
      return this.browserStorageService.getLocal(AuthTokenType[tokenType]);
    }
  }

  deleteAuthTokens() {
    if (this.rememberMe()) {
      this.browserStorageService.removeLocal(AuthTokenType[AuthTokenType.AccessToken]);
      this.browserStorageService.removeLocal(AuthTokenType[AuthTokenType.RefreshToken]);
    } else {
      this.browserStorageService.removeSession(AuthTokenType[AuthTokenType.AccessToken]);
      this.browserStorageService.removeSession(AuthTokenType[AuthTokenType.RefreshToken]);
    }
    this.browserStorageService.removeLocal(this.rememberMeToken);
  }

  private setLoginSession(response: any): void {
    this.setToken(AuthTokenType.AccessToken, response[this.appConfig.accessTokenObjectKey]);
    this.setToken(AuthTokenType.RefreshToken, response[this.appConfig.refreshTokenObjectKey]);
  }

  private setToken(tokenType: AuthTokenType, tokenValue: string): void {
    if (this.rememberMe()) {
      this.browserStorageService.setLocal(AuthTokenType[tokenType], tokenValue);
    } else {
      this.browserStorageService.setSession(AuthTokenType[tokenType], tokenValue);
    }
  }

  getDecodedAccessToken(): any {
      console.log('wooooow  ' , jwt_decode(this.getRawAuthToken(AuthTokenType.AccessToken)));
    return jwt_decode(this.getRawAuthToken(AuthTokenType.AccessToken));
  }

  getDisplayName(): string {
    return this.getDecodedAccessToken().DisplayName;
  }

  getAccessTokenExpirationDateUtc(): Date {
      console.log('111');
    const decoded = this.getDecodedAccessToken();
    if (decoded.exp === undefined) {
      return null;
    }
    const date = new Date(0); // The 0 sets the date to the epoch
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isAccessTokenTokenExpired(): boolean {
    console.log('222');
    const expirationDateUtc = this.getAccessTokenExpirationDateUtc();
    if (!expirationDateUtc) {
      return true;
    }
    return !(expirationDateUtc.valueOf() > new Date().valueOf());
  }

  isLoggedIn(): boolean {
    const accessToken = this.getRawAuthToken(AuthTokenType.AccessToken);
    console.log(accessToken);
    const refreshToken = this.getRawAuthToken(AuthTokenType.RefreshToken);
    console.log(refreshToken);
    const hasTokens = !this.isEmptyString(accessToken) && !this.isEmptyString(refreshToken);
    return hasTokens && !this.isAccessTokenTokenExpired();
  }

  private updateStatusOnPageRefresh(): void {
    this.authStatusSource.next(this.isLoggedIn());
  }

  private isEmptyString(value: string): boolean {
    console.log('444');
    return !value || 0 === value.length;
  }

  // scheduleRefreshToken() {
  //   if (!this.isLoggedIn()) {
  //     return;
  //   }
  //   this.unScheduleRefreshToken();

  //   const expiresAtUtc = this.getAccessTokenExpirationDateUtc().valueOf();
  //   const nowUtc = new Date().valueOf();
  //   const initialDelay = Math.max(1, expiresAtUtc - nowUtc);
  //   console.log('Initial scheduleRefreshToken Delay(ms)', initialDelay);
  //   const timerSource$ = Observable.timer(initialDelay);
  //   this.refreshTokenSubscription = timerSource$.subscribe(() => {
  //     this.refreshToken();
  //   });
  // }

  unScheduleRefreshToken() {
    if (this.refreshTokenSubscription) {
      this.refreshTokenSubscription.unsubscribe();
    }
  }

  // refreshToken() {
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   const model = { refreshToken: this.getRawAuthToken(AuthTokenType.RefreshToken) };
  //   return this.http
  //     .post(`${this.appConfig.apiEndpoint}/${this.appConfig.refreshTokenPath}`, model, { headers: headers })
  //     .finally(() => {
  //       this.scheduleRefreshToken();
  //     })
  //     .map(response => response || {})
  //     .catch((error: HttpErrorResponse) => Observable.throw(error))
  //     .subscribe(result => {
  //       console.log('RefreshToken Result', result);
  //       this.setLoginSession(result);
  //     });
  // }

  getAuthUser(): AuthUser {
    if (!this.isLoggedIn()) {
      return null;
    }

    const decodedToken = this.getDecodedAccessToken();
    let roles = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
    if (roles) {
      roles = roles.map(role => role.toLowerCase());
    }
    return Object.freeze({
      userId: decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'],
      userName: decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'],
      displayName: decodedToken['DisplayName'],
      roles: roles
    });
  }

  isAuthUserInRoles(requiredRoles: string[]): boolean {
    const user = this.getAuthUser();
    if (!user || !user.roles) {
      return false;
    }
    return requiredRoles.some(requiredRole => user.roles.indexOf(requiredRole.toLowerCase()) >= 0);
  }

  isAuthUserInRole(requiredRole: string): boolean {
    return this.isAuthUserInRoles([requiredRole]);
  }

  // getBearerAuthHeader(): HttpHeaders {
  //   return new HttpHeaders({
  //     'Content_Type': 'application/json',
  //     'Authorization': `Bearer ${this.getRawAuthToken(AuthTokenType.AccessToken)}`
  //   });
  // }

}
