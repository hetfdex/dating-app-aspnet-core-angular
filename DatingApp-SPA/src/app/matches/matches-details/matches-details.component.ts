import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { TabsetComponent } from 'ngx-bootstrap';

@Component({
  selector: 'app-matches-details',
  templateUrl: './matches-details.component.html',
  styleUrls: ['./matches-details.component.css']
})
export class MatchesDetailsComponent implements OnInit {
  @ViewChild('matchesTabs') matchesTabs: TabsetComponent;

  user: User;

  galleryOptions: NgxGalleryOptions[];

  galleryImages: NgxGalleryImage[];

  constructor(private userService: UserService, private alertify: AlertifyService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.getUser();
    this.getRoute();
    this.setupPhotos();
  }

  getUser() {
    this.route.data.subscribe(data => {
      this.user = data['user'];
    });
  }

  getRoute() {
    this.route.queryParams.subscribe(params => {
      const selectedTab = params['tab'];

      this.matchesTabs.tabs[selectedTab > 0 ? selectedTab : 0].active = true;
    });
  }

  setupPhotos() {
    this.galleryOptions = [
      {
        width: '500px',
        height: '500px',
        imagePercent: 100,
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: false
      }
    ];
    this.galleryImages = this.getPhotos();
  }

  getPhotos() {
    const imageUrls = [];

    for (let i = 0; i < this.user.photos.length; i++) {
      imageUrls.push({
        small: this.user.photos[i].url,
        medium: this.user.photos[i].url,
        big: this.user.photos[i].url,
        description: this.user.photos[i].description
      });
    }
    return imageUrls;
  }

  selectTab(tabId: number) {
    this.matchesTabs.tabs[tabId].active = true;
  }
}
