import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';
import { CarouselConfig, PostInfo } from 'src/app/interfaces/common.types';
@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {
  userProfilePicture: any;
  carouselImages: string[] = [];
  carouselConfiguration: CarouselConfig;
  posts: PostInfo;
  constructor() { }

  ngOnInit(): void {
    this.userProfilePicture = faker.image.avatar();
    this.getCarouselImages();
    this.createCarouselConfiguration();
    this.getPosts();
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
      carouselHeight: 110,
      imagesConfiguration: {
        width: 90,
        height: 110
      }
    }
  }

  private getPosts() {
    this.posts = {
      userAvatar: faker.image.avatar(),
      userName: 'Evangeline',
      postHashtags: '#MyExperience',
      postImage: faker.image.animals()
    };
  }

}
