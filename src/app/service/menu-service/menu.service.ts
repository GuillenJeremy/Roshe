import { Injectable } from '@angular/core';
import { NavBarItem } from 'src/app/interfaces/common.types';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menuService: NavBarItem[];
  constructor() { }

  public getMenuItems(): NavBarItem[] {
    this.menuService = [
      {
        label: 'Forum',
        iconClass: 'icofont-chat'
      },
      {
        label: 'Checkpoints',
        iconClass: 'icofont-google-map'
      },
      {
        label: 'Button',
        iconClass: 'icofont-warning-alt'
      },
      {
        label: 'Settings',
        iconClass: 'icofont-gear-alt'
      },
      {
        label: 'Profile',
        iconClass: 'icofont-user'
      }
    ];
    return this.menuService;
  }
}
