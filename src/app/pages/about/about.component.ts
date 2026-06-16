import { Component, OnInit } from '@angular/core';
import { LocationService, SiteLocation } from '../../core/services/location.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  location!: SiteLocation;

  constructor(private locationService: LocationService) {}

  ngOnInit(): void {
    this.location = this.locationService.current!;
    // Override team and testimonials from location data
    this.team = [
      { name: 'Valentina Kerry', role: 'General Manager', image: 'assets/images/team-1.jpg' },
      { name: 'Mrs Dolly',       role: 'General Manager', image: 'assets/images/team-2.jpg' },
      { name: 'Samantha Shen',   role: 'General Manager', image: 'assets/images/team-3.jpg' },
      { name: this.location.manager.name, role: this.location.manager.role, image: this.location.manager.image }
    ];
    this.testimonials = this.location.testimonials.map(t => ({ ...t }));
  }
  stats = [
    { value: '250+', label: 'Luxury Rooms' },
    { value: '4.9',  label: 'Customers Rating' },
    { value: '12k+', label: 'Happy Customers' },
    { value: '32+',  label: 'Years Experience' }
  ];

  facilities = [
    { icon: 'fas fa-city',           label: 'City View Rooms' },
    { icon: 'fas fa-wifi',           label: 'Wi-Fi' },
    { icon: 'fas fa-snowflake',      label: 'A/C Rooms' },
    { icon: 'fas fa-dumbbell',       label: 'Gym / Fitness Area' },
    { icon: 'fas fa-swimming-pool',  label: 'Swimming Pool' },
    { icon: 'fas fa-parking',        label: 'Private Parking Available' },
    { icon: 'fas fa-utensils',       label: 'Café & Restaurant' },
    { icon: 'fas fa-concierge-bell', label: '24/7 Front Desk' }
  ];

  team = [
    { name: 'Valentina Kerry', role: 'General Manager', image: 'assets/images/team-1.jpg' },
    { name: 'Mrs Dolly',       role: 'General Manager', image: 'assets/images/team-2.jpg' },
    { name: 'Samantha Shen',   role: 'General Manager', image: 'assets/images/team-3.jpg' },
    { name: 'John D. Alexon',  role: 'Manager',         image: 'assets/images/team-4.jpg' }
  ];

  testimonials = [
    {
      name: 'Zaman D. John',
      role: 'Tourist',
      text: 'We loved our stay. The room was spotless and spacious, and the amenities were excellent. The staff were so warm and welcoming — we truly felt at home.',
      rating: 5
    },
    {
      name: 'Zaman D. John',
      role: 'Tourist',
      text: 'A perfect getaway spot! Great location in the heart of the city, very clean rooms and the food at the restaurant was delicious. Will definitely come back.',
      rating: 5
    }
  ];

  getRatingArray(n: number): number[] {
    return Array(n).fill(0);
  }
}
