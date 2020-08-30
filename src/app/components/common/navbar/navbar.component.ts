import { Component, OnInit } from '@angular/core';
import { NavBarItem } from 'src/app/interfaces/common.types';
import {MenuService} from '../../../service/menu-service/menu.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navbarItems: NavBarItem[];
  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.navbarItems = this.menuService.getMenuItems();
  }

}
