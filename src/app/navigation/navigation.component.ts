import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DrawerComponent } from '../ui/drawer/drawer.component';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-navigation',
  imports: [CommonModule, ButtonModule, DrawerComponent, AvatarModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent {
  @ViewChild(DrawerComponent) drawer!: DrawerComponent;
  showUserDropdown = false;

  openDrawer() {
    this.drawer.open();
  }

  showDropdown() {
    this.showUserDropdown = true;
  }

  hideDropdown() {
    this.showUserDropdown = false;
  }

  // User menu actions
  goToProfile() {
    console.log('Navigate to profile');
    this.hideDropdown();
  }

  goToOrders() {
    console.log('Navigate to orders');
    this.hideDropdown();
  }

  goToSettings() {
    console.log('Navigate to settings');
    this.hideDropdown();
  }

  logout() {
    console.log('Logout user');
    this.hideDropdown();
  }
}
