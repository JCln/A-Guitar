import { AuthService } from './../services/auth.service';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges, OnDestroy } from '@angular/core';
import { GVariables } from '../total-check-lang/gvariables';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', './header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  checkTotalLangV: boolean;
  isLoggedIn: boolean;
  subscription: Subscription;
  displayName: string;

  decodedAccessToken: any = {};
  accessTokenExpirationDate: Date = null;

  constructor(protected variable: GVariables, private authService: AuthService) {
  }

  ngOnInit() {
    this.subscription = this.authService.authStatus$.subscribe(status => {
      this.isLoggedIn = status;
      console.log(this.isLoggedIn);
      if (status) {
        this.displayName = this.authService.getDisplayName();
      }
    });

    this.decodedAccessToken = this.authService.getDecodedAccessToken();
    this.accessTokenExpirationDate = this.authService.getAccessTokenExpirationDateUtc();
  }
  checkLang() {
    this.variable.checkTotalLangV = this.variable.changeLang(this.checkTotalLangV);
  }
  logout() {
    this.authService.logout(true);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
