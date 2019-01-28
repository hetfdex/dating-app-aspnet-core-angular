import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { Pagination, PaginatedResults } from 'src/app/models/pagination';

@Component({
  selector: 'app-matches-list',
  templateUrl: './matches-list.component.html',
  styleUrls: ['./matches-list.component.css']
})
export class MatchesListComponent implements OnInit {
  users: User[];

  userGender: string = localStorage.getItem('userGender');

  genderList = [{value: 'male', display: 'Males'}, {value: 'female', display: 'Females'}];

  userParams: any = {};

  pagination: Pagination;

  constructor(private userService: UserService, private alertify: AlertifyService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.getUsers();

    this.userParams.gender = this.userGender === 'female' ? 'male' : 'female';
    this.userParams.minAge = 18;
    this.userParams.maxAge = 99;
    this.userParams.orderBy = 'lastActive';
  }

  getUsers() {
    this.route.data.subscribe(data => {
      this.users = data['users'].result;
      this.pagination = data['users'].pagination;
    });
  }

  resetFilters() {
    this.userParams.gender = this.userGender === 'female' ? 'male' : 'female';
    this.userParams.minAge = 18;
    this.userParams.maxAge = 99;

    this.loadUsers();
  }

  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;

    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers(this.pagination.currentPage, this.pagination.itemsPerPage, this.userParams)
    .subscribe((response: PaginatedResults<User[]>) => {
      this.users = response.result;
      this.pagination = response.pagination;
    }, error => {
      this.alertify.error(error);
    });
  }
}
