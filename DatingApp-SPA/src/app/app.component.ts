import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  jwtHelper = new JwtHelperService();

  constructor(private authService: AuthService) {}

  ngOnInit() {
    const token = localStorage.getItem('token');

    const userPhotoUrl: string = localStorage.getItem('userPhotoUrl');

    if (token) {
      this.authService.decodedToken = this.jwtHelper.decodeToken(token);
    }

    if (userPhotoUrl) {
      this.authService.updatePhoto(userPhotoUrl);
    }
  }
}
