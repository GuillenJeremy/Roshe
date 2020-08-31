import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { NavBarItem } from 'src/app/interfaces/common.types';
import {MenuService} from '../../../service/menu-service/menu.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navbarItems: NavBarItem[];
  currentRoute: any;
  constructor(private menuService: MenuService, private router: Router) { }

  ngOnInit(): void {
    this.navbarItems = this.menuService.getMenuItems();
    this.router.events.subscribe(changes => {
      if(changes['urlAfterRedirects']) {
        this.currentRoute = changes['urlAfterRedirects'];
        console.log(this.currentRoute);
      }
    })
  }

}
