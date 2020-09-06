import { Injectable } from '@angular/core';
import {SettingMenuItem} from '../../interfaces/common.types';
@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  settingsItems: SettingMenuItem[];
  constructor() { }

  getSettingsItems(): SettingMenuItem[] {
    this.settingsItems = [
      {
        group: 'Contacts',
        items: [
          {
            item: 'Emergency contacts',
            hasItemDesription: false
          },
          {
            item: 'Messages',
            hasItemDesription: true,
            itemDescription: 'Custom mesagges operations options'
          },
          {
            item: 'Emergency Number',
            hasItemDesription: true,
            itemDescription: 'Enable and configure an emergency number'
          }
        ]
      },
      {
        group: 'General',
        items: [
          {
            item: 'GPS settings',
            hasItemDesription: false
          },
          {
            item: 'Hold pannic button',
            hasItemDesription: true,
            itemDescription: 'Send panic message without holding the button',
          },
          {
            item: 'See safe points in the map',
            hasItemDesription: false
          }
        ]
      },
    ];
    return this.settingsItems;
  }
}
