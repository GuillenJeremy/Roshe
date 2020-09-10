import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../service/contacts-service/contacts.service';
@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {

  constructor(public contactsService: ContactsService) { }

  ngOnInit(): void {}

  public onContactChanged(item) {
    console.log(item);
    this.contactsService.updateContactInfo(item);
  }


}
