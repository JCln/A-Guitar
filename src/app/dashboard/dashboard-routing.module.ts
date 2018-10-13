import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProtectedPageComponent } from './protected-page/protected-page.component';
// import { AuthGuardPermission } from '../core/services/auth-config-permission';
// import { AuthGuardService } from '../core/services/auth.guard';
// import { CallProtectedApiComponent } from './call-protected-api/call-protected-api.component';
// import { PageComponent } from '../core/total-check-lang/page/page.component';

const routes: Routes = [
  // {path: 'protectedPage' , component: ProtectedPageComponent},
  // {
  //   path: 'protectedPage',
  //   component: ProtectedPageComponent,
  //   data: {
  //     permission: {
  //       permittedRoles: ['Admin'],
  //       deniedRoles: null
  //     } as AuthGuardPermission
  //   },
  //   canActivate: [AuthGuardService]
  // },
  // {
  //   path: 'Page',
  //   component: PageComponent,
  //   data: {
  //     permission: {
  //       permittedRoles: ['Admin'],
  //       deniedRoles: null
  //     } as AuthGuardPermission
  //   },
  //   canActivate: [AuthGuardService]
  // },
  // {
  //   path: 'callProtectedApi',
  //   component: CallProtectedApiComponent,
  //   data: {
  //     permission: {
  //       permittedRoles: ['Admin', 'User'],
  //       deniedRoles: null
  //     } as AuthGuardPermission
  //   },
  //   canActivate: [AuthGuardService]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
