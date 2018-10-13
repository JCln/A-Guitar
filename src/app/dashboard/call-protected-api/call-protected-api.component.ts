import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { APP_CONFIG, IAppConfig } from '../../core/services/app.config';
import { HttpClient , HttpErrorResponse } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-call-protected-api',
  templateUrl: './call-protected-api.component.html',
  styleUrls: ['./call-protected-api.component.css']
})
export class CallProtectedApiComponent implements OnInit {

  isAdmin = false;
  isUser = false;
  result: any;

  constructor(private authService: AuthService,
              private  httpClient: HttpClient,
              @Inject(APP_CONFIG) private appConfig: IAppConfig,
  ) { }

  ngOnInit() {
    this.isAdmin = this.authService.isAuthUserInRole('Admin');
    this.isUser = this.authService.isAuthUserInRole('User');
  }

  callMyProtectedAdminApiController() {
    this.httpClient
      .get(`${this.appConfig.apiEndpoint}/MyProtectedAdminApi`)
      // .map(response => response || {})
      // .catch((error: HttpErrorResponse) => Observable.throw(error))
      .subscribe(result => {
        this.result = result;
      });
  }

  callMyProtectedApiController() {
    this.httpClient
      .get(`${this.appConfig.apiEndpoint}/MyProtectedApi`)
      // .map(response => response || {})
      // .catch((error: HttpErrorResponse) => Observable.throw(error))
      .subscribe(result => {
        this.result = result;
      });
  }
}
