import { InjectionToken } from "@angular/core";

export let APP_CONFIG = new InjectionToken<string>("app.config");

export interface IAppConfig {
  apiEndpoint: string;
  apiSettingsPath: string;
}

export const AppConfig: IAppConfig = {
  apiEndpoint: "http://localhost:5000",
  apiSettingsPath: "ApiSettings"
};

// import { InjectionToken } from '@angular/core';

// export let APP_CONFIG = new InjectionToken<string>("app.cofig");

// export interface IAppConfig {
//   apiEndpoint: string;
//   loginPath: string;
//   logoutPath: string;
//   refreshTokenPath: string;
//   accessTokenObjectKey: string;
//   refreshTokenObjectKey: string;
// }

// export const AppConfig: IAppConfig = {
//   // apiEndpoint: 'http://localhost:5000',
//   // apiEndpoint: 'https://itunes.apple.com/lookup?id=16586443',
//   // apiEndpoint: ' https://jsonplaceholder.typicode.com',
//   // apiEndpoint: 'https://my-json-server.typicode.com/typicode/demo',
//   apiEndpoint: "http://81.90.148.25/auth",
//   // loginPath: 'account/login',
//   loginPath: "account/login",
//   logoutPath: "account/login",
//   refreshTokenPath: "account/RefreshToken",
//   accessTokenObjectKey: "access_token",
//   refreshTokenObjectKey: "refresh_token"
// };
