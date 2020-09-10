import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../service/contacts-service/contacts.service';
import { ContactInfo } from 'src/app/interfaces/common.types';
import * as faker from 'faker';
@Component({
  selector: 'app-emergency-contacts',
  templateUrl: './emergency-contacts.component.html',
  styleUrls: ['./emergency-contacts.component.scss']
})
export class EmergencyContactsComponent implements OnInit {
  showModal: boolean = false;
  contacToDelete: ContactInfo;

  constructor(public contactsService: ContactsService) { }

  ngOnInit(): void {
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
    this.contactsService.removeContactFromSelected(this.contacToDelete);
    this.showModal = false;
  }

}
