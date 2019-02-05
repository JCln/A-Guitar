import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// import { LoginComponent } from '../authentication/login/login.component';
// import { PageComponent } from './total-check-lang/page/page.component';
// import { WPageComponent } from './total-check-lang/wpage/wpage.component';

const routes: Routes = [
  // {path: 'wpage', component: WPageComponent},
  // {path: '', redirectTo: 'page', pathMatch: 'full'},
  // {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {}
