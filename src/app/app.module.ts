import "./shared/rxjs-operators";

import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthenticationModule } from "./authentication/authentication.module";
import { CommonService } from "./common.service";
import { CoreModule } from "./core/core.module";
import { DashboardModule } from "./dashboard/dashboard.module";
import { PageNotFoundComponent } from "./page-not-found/PageNotFoundComponent";
import { SharedModule } from "./shared/shared.module";

// import { ScrollingModule } from 'ScrollingModule'

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    RouterModule,
    DashboardModule,
    CoreModule,
    HttpClientModule,
    AuthenticationModule,
    SharedModule.forRoot(),
    AppRoutingModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule {}
