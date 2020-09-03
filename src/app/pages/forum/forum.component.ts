import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';
import { CarouselConfig } from 'src/app/interfaces/common.types';
@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {
  userProfilePicture: any;
  carouselImages: string[] = [];
  carouselConfiguration: CarouselConfig;
  constructor() { }

  ngOnInit(): void {
    this.userProfilePicture = faker.image.avatar();
    this.getCarouselImages();
    this.createCarouselConfiguration();
  }

  private getCarouselImages() {
    for (let index = 0; index < 4; index++) {
      const imageLink = faker.image.people();
      this.carouselImages.push(imageLink);
    }
    console.log(this.carouselImages);
  }

  private createCarouselConfiguration() {
    this.carouselConfiguration = {
      carouselHeight: 100,
      imagesConfiguration: {
        width: 90,
        height: 100
      }
    }
  }

}
