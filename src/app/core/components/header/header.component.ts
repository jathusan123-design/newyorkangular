import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { LocationService, SiteLocation } from '../../services/location.service';

export interface NavItem {
  label: string;
  path?: string;
  children?: { label: string; path: string; fragment?: string }[];
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isScrolled = false;
  isMobileMenuOpen = false;
  openDropdown: string | null = null;

  navLinks: NavItem[] = [
    { label: 'Home',     path: '/' },
    { label: 'About Us', path: '/about' },
    {
      label: 'Rooms',
      children: [
        { label: 'Rooms & Suites',       path: '/rooms' },
        { label: 'Hotel Room Facilities', path: '/about', fragment: 'facilities' }
      ]
    },
    {
      label: 'Restaurant',
      children: [
        { label: 'The Restaurant', path: '/restaurant' },
        { label: 'Our Menu',       path: '/restaurant', fragment: 'menu' }
      ]
    },
    {
      label: 'Gallery',
      children: [
        { label: 'Hotel Gallery',      path: '/gallery' },
        { label: 'Restaurant Gallery', path: '/gallery' }
      ]
    },
    { label: 'Contact Us', path: '/contact' }
  ];

  constructor(private router: Router, public locationService: LocationService) {}

  get selectedLocation(): SiteLocation | null {
    return this.locationService.current;
  }

  changeLocation(): void {
    this.locationService.clear();
    this.closeAll();
    this.router.navigate(['/']);
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 80;
  }

  /** Parent label — toggle dropdown only, do NOT navigate */
  toggleDropdown(label: string, event: MouseEvent): void {
    event.stopPropagation();
    this.openDropdown = this.openDropdown === label ? null : label;
  }

  /** Sub-item click — navigate then close everything */
  navigateChild(child: { path: string; fragment?: string }, event: MouseEvent): void {
    event.stopPropagation();
    this.openDropdown = null;
    this.isMobileMenuOpen = false;
    if (child.fragment) {
      this.router.navigate([child.path], { fragment: child.fragment });
    } else {
      this.router.navigate([child.path]);
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (!this.isMobileMenuOpen) {
      this.openDropdown = null;
    }
  }

  closeAll(): void {
    this.isMobileMenuOpen = false;
    this.openDropdown = null;
  }

  /** Close dropdown when clicking anywhere outside */
  @HostListener('document:click')
  onDocClick(): void {
    this.openDropdown = null;
  }
}
