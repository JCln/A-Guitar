import { Component, OnInit } from '@angular/core';
import { Credentials } from '../../core/models/credentials';
import { AuthService } from '../../core/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: Credentials = {username: '' , password: '', rememberMe: false};
  error = '';
  returnUrl: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // reset the login status
    this.authService.logout(false);
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
  }

  submitForm(form: NgForm) {
    this.error = '';
    this.authService.login(this.model)
    .subscribe(isLoggedIn => {
      if (isLoggedIn) {
        if (this.returnUrl) {
          console.log(JSON.stringify( this.router.navigate([this.returnUrl])) + 'this is login component');
          this.router.navigate([this.returnUrl]);
        } else {
          // this.router.navigate(['/protectedPage']);
          this.router.navigate(['/WPage']);
        }
      }
    },
    (error: HttpErrorResponse) => {
      console.log('Login error', error);
      if (error.status === 401) {
        this.error = 'Invalid Username or Password. Please try again.';
      } else if (this.error = 'صفحه مورد نظر وجود ندارد') {} else {
        this.error = `${error.statusText}: ${error.message}`;
      }
    });
  }
}
