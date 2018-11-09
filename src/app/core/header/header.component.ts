import { AuthService } from "./../services/auth.service";
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  OnDestroy
} from "@angular/core";
import { GVariables } from "../total-check-lang/gvariables";
import { Subscription } from "rxjs/internal/Subscription";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css", "./header.component.scss"]
})
export class HeaderComponent implements OnInit, OnDestroy {
  checkTotalLangV: boolean;
  isLoggedIn: boolean;
  subscription: Subscription;
  displayName: string;

  decodedAccessToken: any = {};
  accessTokenExpirationDate: Date = null;

  constructor(
    protected variable: GVariables,
    private authService: AuthService
  ) {
    this.checkTotalLangV = this.variable.changeLang();
  }

  ngOnInit() {
    this.subscription = this.authService.authStatus$.subscribe(status => {
      this.isLoggedIn = status;
      if (status) {
        console.log("is it true");
        this.displayName = this.authService.getDisplayName();
        console.log("display name is   " + this.displayName);
      }
    });
    try {
      this.decodedAccessToken = this.authService.getDecodedAccessToken();
      this.accessTokenExpirationDate = this.authService.getAccessTokenExpirationDateUtc();
    } catch (e) {
      if (e instanceof TypeError) {
        // statements to handle TypeError exceptions
        console.log("this is type error error");
      } else if (e instanceof RangeError) {
        // statements to handle RangeError exceptions
        console.log("this is range error error");
      } else if (e instanceof EvalError) {
        // statements to handle EvalError exceptions
        console.log("this is eval error error");
      } else {
        // statements to handle any unspecified exceptions
        console.log(e); // pass exception object to error handler
      }
    }
  }
  checkLang() {
    this.checkTotalLangV = this.variable.changeLang();
  }
  logout() {
    this.authService.logout(true);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
