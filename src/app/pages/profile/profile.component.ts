import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'
import * as faker from 'faker';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userProfileImage: any;
  userName: any;
  userAge: number;
  detailsForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.userProfileImage = faker.image.avatar();
    console.log(this.userProfileImage);
    this.userName = faker.name.findName();
    console.log(this.userName);
    this.userAge = 18;

    this.createFormGroup()
  }

  private createFormGroup() {
    this.detailsForm = new FormGroup({
      name: new FormControl('Natalia Barrantes'),
      birthday: new FormControl('04/10/2000'),
      gmail: new FormControl('nataliabarrantes@gmail.com'),
      location: new FormControl('San José, Costa Rica'),
      phoneNumber: new FormControl('+ (506) 83367553')
    });
  }
}
