import { AuthService } from "./../../authentication/services/auth.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-protected-page",
  templateUrl: "./protected-page.component.html",
  styleUrls: ["./protected-page.component.css"]
})
export class ProtectedPageComponent implements OnInit {
  decodedAccessToken: any = {};
  accessTokenExpirationDate: Date = null;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    // this.decodedAccessToken = this.authService.getDecodedAccessToken();
    // this.accessTokenExpirationDate = this.authService.getAccessTokenExpirationDateUtc();
  }
}
