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
        iconClass: 'icofont-chat',
        link: '/forum'
      },
      {
        label: 'Checkpoints',
        iconClass: 'icofont-google-map',
        link: ''
      },
      {
        label: 'Button',
        iconClass: 'icofont-warning-alt',
        link: '/emergency'
      },
      {
        label: 'Settings',
        iconClass: 'icofont-gear-alt',
        link: '/settings'
      },
      {
        label: 'Profile',
        iconClass: 'icofont-user',
        link: '/profile'
      }
    ];
    return this.menuService;
  }
}
