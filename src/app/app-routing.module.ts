import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CoreModule } from "./core/core.module";
import { PageNotFoundComponent } from "./page-not-found/PageNotFoundComponent";

// fix after core have perfect tree router
const routes: Routes = [
  { path: "core", component: CoreModule },
  { path: "", redirectTo: "core", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
