import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Tvideos } from './videos';
import { GVariables } from '../gvariables';


@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  checkTotalLangV: boolean;
  // @Output() changeLang = new EventEmitter();

  videolist: any[];
  free = 'رایگان';
  sale = 'خرید';

  constructor(protected variable: GVariables) {
   }

  ngOnInit() {
    this.videolist = Tvideos;
  }
  ImgErrorHandler(event) {
    event.target.src = '../../../assets/4.png';
  }
  getItemFromServer() {
      return this.videolist = Tvideos;
  }
  trackByFn(index , item) {
      return index;
  }

}

