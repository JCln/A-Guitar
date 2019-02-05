// import { map } from 'rxjs/operators';
// import { HttpClient, HttpResponse, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Headers, Http, RequestOptions, Response } from "@angular/http";

// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/do';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class CommonService {
  constructor(private http: HttpClient) {}

  saveUser(user) {
    return this.http
      .post("http://localhost:5500/api/SaveUser", user)
      .pipe(map((response: Response) => response.json()));
  }

  getUser() {
    try {
      return this.http
        .get("http://localhost:5500/api/getUser/")
        .pipe(map((response: Response) => response.json()));
    } catch (e) {
      console.log(e);
    }
  }
  deleteUser(id) {
    return this.http
      .post("", { id: id })
      .pipe(map((response: Response) => response.json()));
  }
}
