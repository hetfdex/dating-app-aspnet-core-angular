import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'src/app/models/message';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-matches-messages',
  templateUrl: './matches-messages.component.html',
  styleUrls: ['./matches-messages.component.css']
})
export class MatchesMessagesComponent implements OnInit {
  @Input() recipientId: number;

  messages: Message[];

  newMessage: any = {};

  constructor(private userService: UserService, private authService: AuthService, private alertify: AlertifyService) {}

  ngOnInit() {
    this.loadMessages();
  }

  loadMessages() {
    const userId = +this.authService.decodedToken.nameid;

    this.userService.getMessageThread(this.authService.decodedToken.nameid, this.recipientId).pipe(
      tap(messages => {
        for (let i = 0; i < messages.length; i++) {
          if (messages[i].isRead === false && messages[i].recipientId === userId) {
            this.userService.markMessageAsRead(userId, messages[i].id);
          }
        }
      })
    ).subscribe(messages => {
      this.messages = messages;
    }, error => {
      this.alertify.error(error);
    });
  }

  sendMessage() {
    this.newMessage.recipientId = this.recipientId;

    this.userService.sendMessage(this.authService.decodedToken.nameid, this.newMessage).subscribe((message: Message) => {
      this.messages.unshift(message);

      this.newMessage.content = '';
    }, error => {
      this.alertify.error(error);
    });
  }
}
