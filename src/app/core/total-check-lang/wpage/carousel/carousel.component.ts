import { Component, OnInit } from "@angular/core";
import { IImage } from "ng-simple-slideshow";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"]
})
export class CarouselComponent implements OnInit {
  imageUrls: (string | IImage)[] = [
    { url: "../../../../../assets/p7.jpg" },
    // tslint:disable-next-line:max-line-length
    // { url: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/56748793/dbohn_170625_1801_0018.0.0.jpg', caption: 'The first slide', href: '#config' },
    // tslint:disable-next-line:max-line-length
    { url: "../../../../../assets/p9.jpg" },
    { url: "../../../../../assets/p8.jpg" }
  ];
  showDots = true;
  dotColor = "#FFF";
  showCaptions = true;
  autoPlay = true;
  autoPlayInterval = 5555;
  stopAutoPlayOnSlide = false;

  constructor() {}

  ngOnInit() {}
}
