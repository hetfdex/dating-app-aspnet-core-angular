import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/Auth.service';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Login: Success');
    }, error => {
      this.alertify.error(error);
    });
  }

  loggedIn() {
    const token = localStorage.getItem('token');

    return !!token;
  }

  logout() {
    localStorage.removeItem('token');

    this.alertify.message('Logged Out');
  }
}
