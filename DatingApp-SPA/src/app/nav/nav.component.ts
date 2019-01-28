import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AlertifyService } from '../services/alertify.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @ViewChild('loginForm') loginForm: NgForm;

  model: any = {};

  photoUrl: string;

  constructor(public authService: AuthService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
    this.authService.currentPhotoUrl.subscribe(photoUrl => this.photoUrl = photoUrl);
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Login Success');

      this.loginForm.reset();
    }, error => {
      this.loginForm.reset();

      this.alertify.error(error);
    }, () => {
      this.router.navigate(['/matches']);
    });
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userPhotoUrl');
    localStorage.removeItem('userGender');

    this.authService.decodedToken = null;

    this.alertify.message('Logged Out');

    this.router.navigate(['/home']);
  }
}
