import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';
import { ContactInfo } from 'src/app/interfaces/common.types';
@Component({
  selector: 'app-emergency-contacts',
  templateUrl: './emergency-contacts.component.html',
  styleUrls: ['./emergency-contacts.component.scss']
})
export class EmergencyContactsComponent implements OnInit {
  contacts: ContactInfo[] = [];
  showModal: boolean = false;
  contacToDelete: ContactInfo;
  constructor() { }

  ngOnInit(): void {
    this.getContactInfo();
  }

  private getContactInfo() {
    for (let index = 0; index < 15; index++) {
      const contact: ContactInfo = {
        contactPicture: faker.image.avatar(),
        contactNumber: faker.phone.phoneNumber(),
        contactName: faker.name.findName()
      };
      this.contacts.push(contact);
    }
  }

  public onContactDelete(contactInfo) {
    console.log('CONTACT TO DELETE', contactInfo);
    this.contacToDelete = contactInfo;
    this.showModal = true;
  }

  public closeModal() {
    this.showModal = false;
  }

  public confirmDeleteModal() {
    this.contacts = this.contacts.filter(contact => {
      return contact.contactNumber !== this.contacToDelete.contactNumber;
    });
    this.showModal = false;
  }

}
