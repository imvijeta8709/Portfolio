import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  expanded = false;
  navColour = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.navColour = window.scrollY >= 20;
  }

  toggleNavbar() {
    this.expanded = !this.expanded;
  }

  closeNavbar() {
    this.expanded = false;
  }
}
