import { Component } from '@angular/core';
import { LocationService, SiteLocation } from '../../services/location.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  constructor(public locationService: LocationService) {}

  get location(): SiteLocation | null {
    return this.locationService.current;
  }

  quickLinks = [
    { label: 'About Hotel',   path: '/about' },
    { label: 'Rooms & Suites', path: '/rooms' },
    { label: 'Reservations',  path: '/contact' },
    { label: 'Contact',       path: '/contact' }
  ];

  services = [
    'City View Rooms',
    'Free Wi-Fi',
    'Air-Conditioned Rooms',
    'Gym / Fitness Area',
    'Indoor Swimming Pool',
    'Private Parking'
  ];

  socialLinks = [
    { icon: 'fab fa-facebook-f', url: 'https://www.facebook.com/share/1McEinJCGb/' },
    { icon: 'fab fa-instagram',  url: 'https://instagram.com/newyorkguesthouseandbar' },
    { icon: 'fab fa-twitter',    url: 'https://twitter.com/' }
  ];

  openHours = 'Week Days: 09:00 – 18:00  |  Sunday: Closed';
}
