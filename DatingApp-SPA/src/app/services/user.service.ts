import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { PaginatedResults } from '../models/pagination';
import { map } from 'rxjs/operators';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class UserService {
baseUrl = environment.apiUrl;

constructor(private http: HttpClient) {}

getUsers(currentPage?, itemsPerPage?, userParams?, likesParam?): Observable<PaginatedResults<User[]>> {
  const paginatedResult: PaginatedResults<User[]> = new PaginatedResults<User[]>();

  let params = new HttpParams();

  if (currentPage != null && itemsPerPage != null) {
    params = params.append('currentPage', currentPage);
    params = params.append('itemsPerPage', itemsPerPage);
  }

  if (userParams != null) {
    params = params.append('minAge', userParams.minAge);
    params = params.append('maxAge', userParams.maxAge);
    params = params.append('gender', userParams.gender);
    params = params.append('orderBy', userParams.orderBy);
  }

  if (likesParam === 'Likers') {
    params = params.append('likers', 'true');
  }

  if (likesParam === 'Likees') {
    params = params.append('likees', 'true');
  }
  return this.http.get<User[]>(this.baseUrl + 'users', { observe: 'response', params}).pipe(
    map(response => {
      paginatedResult.result = response.body;

      if (response.headers.get('Pagination') !== null) {
        paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
      }
      return paginatedResult;
    }));
}

getUser(id: number): Observable<User> {
  return this.http.get<User>(this.baseUrl + 'users/' + id);
}

updateUser(id: number, user: User) {
  return this.http.put(this.baseUrl + 'users/' + id, user);
}

setMainPhoto(userId: number, photoId: number) {
  return this.http.post(this.baseUrl + 'users/' + userId + '/photos/' + photoId + '/setMain', {});
}

deletePhoto(userId: number, photoId: number) {
  return this.http.delete(this.baseUrl + 'users/' + userId + '/photos/' + photoId);
}

sendLike(senderId: number, recipientId: number) {
  return this.http.post(this.baseUrl + 'users/' + senderId + '/like/' + recipientId, {});
}

getMessages(id: number, currentPage?, itemsPerPage?, messageConainter?) {
  const paginatedResult: PaginatedResults<Message[]> = new PaginatedResults<Message[]>();

  let params = new HttpParams();

  params = params.append('MessageContainer', messageConainter);

  if (currentPage != null && itemsPerPage != null) {
    params = params.append('currentPage', currentPage);
    params = params.append('itemsPerPage', itemsPerPage);
  }
  return this.http.get<Message[]>(this.baseUrl + 'users/' + id + '/messages', { observe: 'response', params}).pipe(
    map(response => {
      paginatedResult.result = response.body;

      if (response.headers.get('Pagination') !== null) {
        paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
      }
      return paginatedResult;
    }));
  }

  getMessageThread(senderId: number, recipientId) {
    return this.http.get<Message[]>(this.baseUrl + 'users/' + senderId + '/messages/thread/' + recipientId);
  }

  sendMessage(id: number, message: Message) {
    return this.http.post(this.baseUrl + 'users/' + id + '/messages', message);
  }

  deleteMessage(id: number, userId: number) {
    return this.http.post(this.baseUrl + 'users/' + userId + '/messages/' + id, {});
  }
}
