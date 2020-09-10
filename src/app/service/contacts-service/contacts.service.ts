import { Injectable } from '@angular/core';
import { ContactInfo } from '../../interfaces/common.types';
import * as faker from 'faker';
@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  contacts: ContactInfo[] = [];
  selectedContacts: ContactInfo[] = [];
  constructor() {
    this.createContactsArray();
  }

  public createContactsArray() {
    for (let index = 0; index < 15; index++) {
      const contact: ContactInfo = {
        contactPicture: faker.image.avatar(),
        contactNumber: faker.phone.phoneNumber(),
        contactName: faker.name.findName(),
        isContactSelected: index < 5
      };
      this.contacts.push(contact);
    }
    console.log(this.contacts);
    this.getSelectedContacts()

  }

  private getSelectedContacts() {
    this.selectedContacts = this.contacts.filter((contact: ContactInfo) => {
      return contact.isContactSelected;
    });
  }

  public updateContactInfo(contactToUpdate) {
    this.contacts.map(contact => {
      if(contact.contactNumber === contactToUpdate.item.contactNumber) {
        contact.isContactSelected = contactToUpdate.isSelected;
      }
    });
    console.log(this.contacts);
    this.getSelectedContacts();
  }

  public removeContactFromSelected(contactToDelete: ContactInfo) {
    this.contacts.map(contact => {
      if(contact.contactNumber === contactToDelete.contactNumber) {
        contact.isContactSelected = false;
      }
    });
    this.getSelectedContacts();
  }
}
