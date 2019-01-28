import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-matches-card',
  templateUrl: './matches-card.component.html',
  styleUrls: ['./matches-card.component.css']
})
export class MatchesCardComponent {
  @Input() user: User;

  constructor(private authService: AuthService, private userService: UserService, private altertify: AlertifyService) {}

  sendLike(recipientId: number) {
    this.userService.sendLike(this.authService.decodedToken.nameid, recipientId).subscribe(data => {
      this.altertify.success('Liked: ' + this.user.alias);
    }, error => {
      this.altertify.error(error);
    });
  }
}
