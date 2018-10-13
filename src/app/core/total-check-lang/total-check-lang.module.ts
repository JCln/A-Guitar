import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TotalCheckLangRoutingModule } from './total-check-lang-routing.module';
import { InfoComponent } from './info/info.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { VideoListComponent } from './video-list/video-list.component';
import { TotalCheckLangComponent } from './total-check-lang.component';
import { GVariables } from './gvariables';
import { PTComponent } from './pt/pt.component';
import { SlideshowModule} from 'ng-simple-slideshow';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { WPageComponent } from './wpage/wpage.component';
import { CarouselComponent } from './wpage/carousel/carousel.component';

@NgModule({
  imports: [
    CommonModule,
    TotalCheckLangRoutingModule,
    SlideshowModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    MglTimelineModule,
    RouterModule
  ],
  exports: [
    TotalCheckLangComponent,
    AddNoteComponent,
    VideoListComponent,
  ],
  declarations: [
    WPageComponent,
    AddNoteComponent,
    VideoListComponent,
    TotalCheckLangComponent,
    CarouselComponent,
    PTComponent,
    InfoComponent
  ],
  providers: [
    GVariables
  ]
})
export class TotalCheckLangModule { }
