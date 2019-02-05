import { Component, OnInit, Inject } from "@angular/core";

import { AuthService } from "./../../authentication/services/auth.service";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import {
  IAppConfig,
  APP_CONFIG
} from "../../authentication/services/app.config";
// import { Observable } from 'rxjs/Observable';

@Component({
  selector: "app-call-protected-api",
  templateUrl: "./call-protected-api.component.html",
  styleUrls: ["./call-protected-api.component.css"]
})
export class CallProtectedApiComponent implements OnInit {
  isAdmin = false;
  isUser = false;
  result: any;

  constructor(
    private authService: AuthService,
    private httpClient: HttpClient,
    @Inject(APP_CONFIG) private appConfig: IAppConfig
  ) {}

  ngOnInit() {
    // this.isAdmin = this.authService.isAuthUserInRole('Admin');
    // this.isUser = this.authService.isAuthUserInRole('User');
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
