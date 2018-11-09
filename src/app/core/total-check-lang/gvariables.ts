import { Injectable } from "@angular/core";

@Injectable()
export class GVariables {
  checkTotalLangV = true;

  changeLang() {
    return (this.checkTotalLangV = !this.checkTotalLangV);
  }
}
