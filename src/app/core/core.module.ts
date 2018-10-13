import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { APP_CONFIG, AppConfig } from './services/app.config';
import { AuthService } from './services/auth.service';
import { BrowserStorageService } from './browser-storage.service';
import { AuthGuardService } from './services/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import { AuthInterceptorService } from './services/auth-interceptor.service';
import { TotalCheckLangModule } from './total-check-lang/total-check-lang.module';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import * as JWT from 'jwt-decode';
// import './services/rxjs-operators';

@NgModule({
  imports: [
    CommonModule,
    TotalCheckLangModule,
    CoreRoutingModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    SidenavComponent,
    PageNotFoundComponent
  ],
  declarations: [
    HeaderComponent,
    SidenavComponent,
    PageNotFoundComponent,
  ],
  providers: [
    AuthGuardService,
    AuthService,
    BrowserStorageService,
  //   {provide: HTTP_INTERCEPTORS ,
  //   useClass: AuthInterceptorService,
  //   multi: true
  // },
    { provide: APP_CONFIG , useValue: AppConfig}
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      // throw new Error('CoreModule should be imported ONLY in AppModule.');
      console.log('throw this error');
    }
  }
}
