import { Injectable } from '@angular/core';

@Injectable()
export class GVariables {
  checkTotalLangV = false;

  changeLang(checkTotalLangV: boolean) {
    this.checkTotalLangV = !this.checkTotalLangV;
    return this.checkTotalLangV;
  }

}
