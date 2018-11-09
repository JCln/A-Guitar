import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { ProtectedPageComponent } from "./protected-page/protected-page.component";
import { CallProtectedApiComponent } from "./call-protected-api/call-protected-api.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [CommonModule, SharedModule, DashboardRoutingModule],
  declarations: [ProtectedPageComponent, CallProtectedApiComponent]
})
export class DashboardModule {}
