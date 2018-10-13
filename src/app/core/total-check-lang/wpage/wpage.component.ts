import { Subscription } from 'rxjs/internal/Subscription';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { GVariables } from '../gvariables';

@Component({
  selector: 'app-wpage',
  templateUrl: './wpage.component.html',
  styleUrls: ['./wpage.component.css']
})
export class WPageComponent implements OnInit {

  title = 'GUITAR';
  checkTotalLangV: boolean;

  isLoggedIn: boolean;
  decodedAccessToken: any = {};
  accessTokenExpirationDate: Date = null;
  subscription: Subscription;
  displayName: string;

  constructor(private authService: AuthService, protected variable: GVariables) {
    // this.checkTotalLangV = variable.checkTotalLangV;
  }

  OnInit() {
    try {
    this.decodedAccessToken = this.authService.getDecodedAccessToken();
    console.log(this.decodedAccessToken);
    this.accessTokenExpirationDate = this.authService.getAccessTokenExpirationDateUtc();
    console.log(this.accessTokenExpirationDate + 'access token expiration date');
    } catch (error) {}
  }

  // ngOnInit() {
  //   this.subscription = this.authService.authStatus$.subscribe(status => {
  //     this.isLoggedIn = status;
  //     console.log(this.isLoggedIn);
  //     if (status) {
  //       this.displayName = this.authService.getDisplayName();
  //       console.log(this.displayName + status);
  //     }
  //   });
  // }

  // checkLang() {
  //   this.variable.checkTotalLangV = !this.checkTotalLangV;
  // }
  // ngOnChanges() {
  //   // this.checkTotalLangV = !this.checkTotalLangV;
  //   this.variable.checkTotalLangV = !this.checkTotalLangV;
  // }

  // ngOnDestroy() {
    // prevent memory leak when component is destroyed
  //   this.subscription.unsubscribe();
  // }

  // logout() {
  //   this.authService.logout(true);
  // }

  ngOnInit() {
  }

}
