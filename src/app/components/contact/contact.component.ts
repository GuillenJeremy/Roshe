import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ContactInfo } from 'src/app/interfaces/common.types';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Input() contactInfo: ContactInfo;
  @Input() isDeleteMode: boolean = true;
  @Output() onContactDelete: EventEmitter<ContactInfo> = new EventEmitter();
  @Output() onContactChanged: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {}

  public onDeleteContact(contactToDelete) {
    this.onContactDelete.emit(contactToDelete);
  }


  public onChangeContact(event) {
    const itemToEmit = {
      isSelected: event,
      item: this.contactInfo,
    };
    this.onContactChanged.emit(itemToEmit);

  }

}
