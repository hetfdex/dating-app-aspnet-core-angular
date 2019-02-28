import { Component, OnInit } from '@angular/core';
import { Pagination, PaginatedResults } from '../models/pagination';
import { Message } from '../models/message';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages: Message[];

  pagination: Pagination;

  messageContainer = 'Unread';

  constructor(private userService: UserService, private authService: AuthService,
    private route: ActivatedRoute, private alertify: AlertifyService) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.messages = data['messages'].result;

      this.pagination = data['messages'].pagination;
    });
  }

  loadMessages() {
    this.userService.getMessages(this.authService.decodedToken.nameid, this.pagination.currentPage,
      this.pagination.itemsPerPage, this.messageContainer).subscribe((result: PaginatedResults<Message[]>) => {
        this.messages = result.result;

        this.pagination = result.pagination;
      }, error => {
        this.alertify.error(error);
      });
  }

  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;

    this.loadMessages();
  }
}
