import { Component, OnInit, HostListener } from '@angular/core';
import { window } from 'rxjs/operators';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css', './info.component.scss'],

})
export class InfoComponent implements OnInit {
  size = 20;
  color = false;

  // $window: HTMLElement;
  // @HostListener('window:resize', ['$event'])
  // sizechange(event) {
  //   console.log('size changed', event);
  // }




  // // const $element: HTMLElement = document.getElementsByClassName('each-element');
  // check_for_fade() {

  // }

  // trigger() {
  //   this.$window.dispatchEvent(new Event('resize'));
  // }
  ngOnInit() {
  }

}


// let $element: HTMLElement;

// $element = document.getElementById('each-element title');

