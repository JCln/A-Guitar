import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  show = false;

  toggle() {
    this.show = !this.show;
    // const that = this;
    // setTimeout(function() {
    // that.parentNode.style.flex = 'auto';
    // that.parentNode.style['max-width'] = 'none';
    // }, 2000);
  }

  ngOnInit() {
  }
}
