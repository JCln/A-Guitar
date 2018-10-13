import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { LoginComponent } from '../authentication/login/login.component';
// import { PageComponent } from './total-check-lang/page/page.component';
// import { WPageComponent } from './total-check-lang/wpage/wpage.component';

const routes: Routes = [
  // {path: 'wpage', component: WPageComponent},
  // {path: '', redirectTo: 'page', pathMatch: 'full'},
  // {path: 'login', component: LoginComponent},
  // {path: '**' , component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
