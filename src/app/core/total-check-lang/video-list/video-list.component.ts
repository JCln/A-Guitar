import { catchError } from "rxjs/operators";
import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  AfterViewInit,
  OnDestroy
} from "@angular/core";
import { Tvideos } from "./videos";
import { GVariables } from "../gvariables";

import { CommonService } from "./../../../common.service";
declare let videoJs: any;

@Component({
  selector: "app-video-list",
  templateUrl: "./video-list.component.html",
  styleUrls: ["./video-list.component.css", "./video-list.component.scss"]
})
export class VideoListComponent implements OnInit, AfterViewInit, OnDestroy {
  checkTotalLangV: boolean;

  id: string;
  private videoJSplayer: any;

  videolist: any[] = Tvideos;
  free = "رایگان";
  sale = "خرید";

  Repdata;
  valbutton = "save";

  videooo = [
    "https://www.aparat.com/video/video/embed/videohash/zZA7B/vt/frame"
  ];

  constructor(
    protected variable: GVariables,
    private commonService: CommonService
  ) {}

  ngAfterViewInit() {
    // this.videoJSplayer = videoJs(document.getElementById('video_player_id'), {} , function() {
    // this.video
    // });
  }

  ngOnDestroy() {
    // console.log('Deinit - Destroyed Component');
    // this.videoJSplayer.dispose();
  }

  ngOnInit() {
    try {
      this.videolist = Tvideos;
      // this.commonService.getUser().subscribe(data => (this.Repdata = data).catchError(console.log(data)));
    } catch (e) {
      console.log(e);
    }
  }
  // onSave = function (user, isValid: boolean) {
  //   user.mode = this.valbutton;
  //   this.CommonService.saveUser(user)
  //   .subscribe(data => alert(data.data));
  //   this.ngOnInit();
  // } , error => this.errorMassage = error );
  // };

  edit = function(kk) {
    this.id = kk._id;
    this.name = kk.name;
    this.address = kk.address;
    this.valbutton = "Update";
  };

  delete = function(id) {
    this.commonService.deleteUser(id).subscribe(
      data => {
        alert(data.data);
        this.ngOnInit();
      },
      error => (this.errorMassage = error)
    );
  };

  ImgErrorHandler(event) {
    event.target.src = "../../../../assets/p4.jpg";
  }
  getItemFromServer() {
    return (this.videolist = Tvideos);
  }
  trackByFn(index, item) {
    return index;
  }
  addOrRemoveVideos() {
    document.getElementById("surprise").innerHTML = "";
  }
}
