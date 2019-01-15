import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { AlertifyService } from '../services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()

export class MatchesDetailsResolver implements Resolve<User> {
    constructor(private userService: UserService, private router: Router, private altertify: AlertifyService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<User> {
        return this.userService.getUser(route.params['id']).pipe(
            catchError(error => {
                this.altertify.error('Error: Could not retrieve data');

                this.router.navigate(['/matches']);

                return of(null);
            })
        );
    }
}
