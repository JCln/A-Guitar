import { Injectable } from "@angular/core";

@Injectable()
export class GVariables {
  checkTotalLangV = false;
  colorSwitcher = false;

  changeLang() {
    return (this.checkTotalLangV = !this.checkTotalLangV);
  }

  changeColor(): boolean {
    return (this.colorSwitcher = !this.colorSwitcher);
  }
}
