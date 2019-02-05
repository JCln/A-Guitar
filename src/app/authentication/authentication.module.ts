import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { SharedModule } from "./../shared/shared.module";
import { AccessDeniedComponent } from "./access-denied/access-denied.component";
import { AuthenticationRoutingModule } from "./authentication-routing.module";
import { LoginComponent } from "./login/login.component";
import { APP_CONFIG, AppConfig } from "./services/app.config";
import { AuthService } from "./services/auth.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AuthenticationRoutingModule
  ],
  providers: [AuthService, { provide: APP_CONFIG, useValue: AppConfig }], // AuthGuardService clear by babak
  declarations: [LoginComponent, AccessDeniedComponent]
})
export class AuthenticationModule {}
