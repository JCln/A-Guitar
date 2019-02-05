"use strict";

import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { TNote } from "./TNote";
import { GVariables } from "../gvariables";

@Component({
  selector: "app-add-note",
  templateUrl: "./add-note.component.html",
  styleUrls: ["./add-note.component.css"]
})
export class AddNoteComponent implements OnInit {
  checkTotalLangV: boolean;

  scrollItems: number[] = [];
  musicNotes = [];
  nothing: any = [];
  free = "رایگان";
  sale = "خرید";

  constructor(protected variable: GVariables) {
    for (let index = 0; index < 10000; index++) {
      this.scrollItems.push(index);
    }
    // this.checkTotalLangV = variable.checkTotalLangV;
  }

  img = {
    pasargadBank: "https://epay.bpi.ir",
    mellatBank: "https://bill.bpm.bankmellat.ir/bpgwchannel/",
    melliBank: "https://bmi.ir/fa/pages",
    saderatBank:
      "http://www.bsi.ir/Pages/ElectronicBank/mobilebanking/PayingBills.aspx"
  };

  ngOnInit() {
    this.musicNotes = TNote;
    for (let index = 0; index < this.musicNotes.length; index++) {
      console.log(Object.values(this.musicNotes[index].notes));
      this.nothing = Object.values(this.musicNotes[index].notes);
    }
  }
  checkLang() {
    console.log("thisssss" + this.checkTotalLangV);
    this.variable.checkTotalLangV = !this.checkTotalLangV;
    this.checkTotalLangV = !this.checkTotalLangV;
    // this.changeLang.emit(this.checkTotalLangV);
    // console.log(this.checkTotalLangV);
  }
  getItemsFromServer() {
    // return this.musicNotes = TNote; // just for now 97.9.18 by babak
  }
  trackByFn(index) {
    return index;
  }

  ImgErrorHandler(event) {
    try {
      event.target.src = "../../../../assets/defaultP.png";
    } catch (e) {
      console.log(e);
    }
  }
}
