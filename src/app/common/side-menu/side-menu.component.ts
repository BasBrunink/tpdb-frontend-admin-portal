import { Component } from '@angular/core';
import {MatListItem, MatListItemMeta, MatListItemTitle, MatNavList} from '@angular/material/list';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';


export interface MenuItem {
  name: string;
  icon: string;
  route: string;
  children? : MenuItem[];
}


@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [
    MatNavList,
    MatListItem,
    MatIcon,
    MatListItemTitle,
    MatIconButton,
    MatListItemMeta,
    RouterLink,
    TranslateModule
  ],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {
  menuItems: MenuItem[] = [];
  constructor() {
    this.menuItems = [
      { name: 'sidemenu.home', icon: 'home', route: 'home' },
      { name: 'sidemenu.dashboard', icon: 'dashboard', route: 'dashboard' },
      // { name: 'Resort', icon: 'menu', route: 'resort' },
      // { name: 'Park', icon: 'profile', route: 'profile' },
      // { name: 'Ride', icon: 'profile', route: 'profile' },
      // { name: 'Restaurant', icon: 'profile', route: 'profile' },
      // { name: 'Hotel', icon: 'profile', route: 'profile' },
      // { name: 'Settings', icon: 'settings', route: 'settings' },
      // { name: 'Logout', icon: 'logout', route: 'logout' }
    ];
  }

}
