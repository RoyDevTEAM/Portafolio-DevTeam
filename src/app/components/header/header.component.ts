import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    const hamburger = document.querySelector('.hamburger') as HTMLElement;
    if (this.isMenuOpen) {
      hamburger.classList.add('open');
    } else {
      hamburger.classList.remove('open');
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const header = document.querySelector('.header') as HTMLElement;
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
}
