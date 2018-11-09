import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { Tvideos } from "./videos";
import { GVariables } from "../gvariables";

import { CommonService } from "./../../../common.service";

@Component({
  selector: "app-video-list",
  templateUrl: "./video-list.component.html",
  styleUrls: ["./video-list.component.css"]
})
export class VideoListComponent implements OnInit {
  checkTotalLangV: boolean;
  // @Output() changeLang = new EventEmitter();

  videolist: any[];
  free = "رایگان";
  sale = "خرید";

  constructor(
    protected variable: GVariables,
    private commonService: CommonService
  ) {}

  Repdata;
  valbutton = "save";

  ngOnInit() {
    this.videolist = Tvideos;
    this.commonService.getUser().subscribe(data => (this.Repdata = data));
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
    event.target.src = "../../../assets/4.png";
  }
  getItemFromServer() {
    return (this.videolist = Tvideos);
  }
  trackByFn(index, item) {
    return index;
  }
}
