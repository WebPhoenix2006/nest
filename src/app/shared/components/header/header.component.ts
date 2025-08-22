import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  // Options for the dropdown
  categoryOptions = [
    {
      label: 'Cake & Milk',
      value: 'cake-and-milk',

      action: () => {},
    },
    {
      label: 'Coffees & Teas',
      value: 'coffees-and-teas',

      action: () => {},
    },
    {
      label: 'Pet Foods',
      value: 'pet-foods',

      action: () => {},
    },
    {
      label: 'Vegetables',
      value: 'vegetables',

      action: () => {},
    },
  ];

  // Menubar show/hide is toggled with this
  mobileMenuActive = false;

  // Menubar toggle function
  toggleMobileMenu(): void {
    this.mobileMenuActive = !this.mobileMenuActive;

    // Prevent body scroll when menu is open
    if (this.mobileMenuActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  // Menubar close functionks
  closeMobileMenu(): void {
    this.mobileMenuActive = false;
    document.body.style.overflow = 'auto';
  }

  // Close mobile menu when window is resized to desktop size
  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    if (event.target.innerWidth >= 768 && this.mobileMenuActive) {
      this.closeMobileMenu();
    }
  }

  // Close mobile menu when clicking outside (handled in template with overlay click)
  @HostListener('document:keydown.escape', ['$event'])
  onKeydownHandler(event: KeyboardEvent): void {
    if (this.mobileMenuActive) {
      this.closeMobileMenu();
    }
  }
}
