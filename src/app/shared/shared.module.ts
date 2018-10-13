import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  imports: [
    CommonModule,
    // SharedRoutingModule
  ],
  declarations: [
    // LoaderSpinnerComponent
  ],
  exports: [
    // LoaderSpinnerComponent,
     CommonModule
  ],

})
export class SharedModule {
  static forRoot(): ModuleWithProviders {

    return {
      ngModule: SharedModule,
      providers: [ /* All of your services here. It will hold the services needed by `itself`. */]
    };
  }
}
