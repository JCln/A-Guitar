'use strict';

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TNote } from './TNote';
import { GVariables } from '../gvariables';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  checkTotalLangV: boolean;

  musicNotes: any[];
  free = 'رایگان';
  sale = 'خرید';

  constructor(protected variable: GVariables) {
    // this.checkTotalLangV = variable.checkTotalLangV;
  }

  img = {
    pasargadBank: 'https://epay.bpi.ir',
    mellatBank: 'https://bill.bpm.bankmellat.ir/bpgwchannel/',
    melliBank: 'https://bmi.ir/fa/pages',
    saderatBank: 'http://www.bsi.ir/Pages/ElectronicBank/mobilebanking/PayingBills.aspx'
  };


  ngOnInit() {
    this.musicNotes = TNote;
  }
  checkLang() {
    console.log('thisssss' + this.checkTotalLangV);
    this.variable.checkTotalLangV = !this.checkTotalLangV;
    this.checkTotalLangV = !this.checkTotalLangV;
    // this.changeLang.emit(this.checkTotalLangV);
    // console.log(this.checkTotalLangV);
  }
  getItemsFromServer() {
      return this.musicNotes = TNote;
  }
  trackByFn(index , item) {
      return index;
  }

  ImgErrorHandler(event) {
    event.target.src = '../../../../assets/defaultNote2.png';
  }
}
