import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Photo } from 'src/app/models/photo';
import { FileUploader } from 'ng2-file-upload';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-photo-editor',
  templateUrl: './photo-editor.component.html',
  styleUrls: ['./photo-editor.component.css']
})
export class PhotoEditorComponent implements OnInit {
  @Input() photos: Photo[];

  @Output() getMatchesPhotoChange = new EventEmitter<string>();

  baseUrl = environment.apiUrl;

  currentMainPhoto: Photo;

  uploader: FileUploader;
  hasBaseDropZoneOver = false;

  constructor(private authService: AuthService, private userService: UserService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.initUploader();
  }

  initUploader() {
    this.uploader = new FileUploader({
      url: this.baseUrl + 'users/' + this.authService.decodedToken.nameid + '/photos',
      authToken: 'Bearer ' + localStorage.getItem('token'),
      isHTML5: true,
      allowedFileType: ['image'],
      removeAfterUpload: true,
      autoUpload: false,
      maxFileSize: 10 * 1024 * 1024
    });
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };

    this.uploader.onSuccessItem = (item, response, status, headers) => {
      if (response) {
        const result: Photo = JSON.parse(response);

        const photo = {
          id: result.id,
          url: result.url,
          added: result.added,
          description: result.description,
          isMain: result.isMain
        };
        this.photos.push(photo);
      }
    };
  }

  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  setMainPhoto(photo: Photo) {
    this.userService.setMainPhoto(this.authService.decodedToken.nameid, photo.id).subscribe(() => {
      this.currentMainPhoto = this.photos.filter(p => p.isMain === true)[0];

      this.currentMainPhoto.isMain = false;

      photo.isMain = true;

      this.authService.updatePhoto(photo.url);
      this.authService.currentUser.photoUrl = photo.url;

      localStorage.setItem('user', JSON.stringify(this.authService.currentUser));

      this.alertify.success('Main Photo Set');
    }, error => {
      this.alertify.error(error);
    });
  }
}
