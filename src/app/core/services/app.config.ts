import { InjectionToken } from '@angular/core';

export let APP_CONFIG = new InjectionToken<string>('app.cofig');

export interface IAppConfig {
  apiEndpoint: string;
  loginPath: string;
  logoutPath: string;
  refreshTokenPath: string;
  accessTokenObjectKey: string;
  refreshTokenObjectKey: string;
}

export const AppConfig: IAppConfig = {
  // apiEndpoint: 'http://localhost:4200',
  // apiEndpoint: 'https://itunes.apple.com/lookup?id=16586443',
  apiEndpoint: ' https://jsonplaceholder.typicode.com',
  // apiEndpoint: 'https://my-json-server.typicode.com/typicode/demo',
  // loginPath: 'account/login',
  loginPath: 'posts',
  logoutPath: 'posts/1',
  refreshTokenPath: 'account/RefreshToken',
  accessTokenObjectKey: 'access_token',
  refreshTokenObjectKey: 'refresh_token'
};
