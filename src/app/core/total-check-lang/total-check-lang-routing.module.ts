import { Ng2FileUploadTestComponent } from "./video-list/ng2-file-upload-test/ng2-file-upload-test.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PTComponent } from "./pt/pt.component";
import { AddNoteComponent } from "./add-note/add-note.component";
import { VideoListComponent } from "./video-list/video-list.component";
import { WPageComponent } from "./wpage/wpage.component";
import { InfoComponent } from "./info/info.component";

const routes: Routes = [
  { path: "WPage", component: WPageComponent },
  { path: "Info", component: InfoComponent },

  { path: "addNote", component: AddNoteComponent },
  {
    path: "videoList",
    component: VideoListComponent,
    children: [
      {
        path: "Ng2FileUploadTest",
        component: Ng2FileUploadTestComponent
      }
    ]
  },
  { path: "PT", component: PTComponent },
  { path: "", redirectTo: "WPage", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TotalCheckLangRoutingModule {}
