import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ContactInfo } from 'src/app/interfaces/common.types';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Input() contactInfo: ContactInfo;
  @Output() onContactDelete: EventEmitter<ContactInfo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {}

  public onDeleteContact(contactToDelete) {
    this.onContactDelete.emit(contactToDelete);
  }

}
