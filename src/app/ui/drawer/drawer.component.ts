import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DrawerModule } from 'primeng/drawer';

@Component({
  selector: 'app-drawer',
  imports: [DrawerModule, RouterModule],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.css',
})
export class DrawerComponent {
  visible: boolean = false;

  constructor(private router: Router) {}

  open() {
    this.visible = true;
  }

  closeDrawer() {
    this.visible = false;
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
    this.closeDrawer();
  }
}
