import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';
@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {
  userProfilePicture: any;
  constructor() { }

  ngOnInit(): void {
    this.userProfilePicture = faker.image.avatar();

  }

}
