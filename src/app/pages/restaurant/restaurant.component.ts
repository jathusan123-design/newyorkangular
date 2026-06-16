import { Component, OnInit } from '@angular/core';
import { LocationService, SiteLocation } from '../../core/services/location.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {
  location!: SiteLocation;
  activeCategory = 'All';

  hours = [
    { meal: 'Lunch',     time: '11:00 AM – 2:30 PM' },
    { meal: 'Dinner',    time: '6:00 PM – 10:30 PM' },
    { meal: 'Week Days', time: '09:00 AM – 6:00 PM' },
    { meal: 'Sunday',    time: 'Closed' }
  ];

  venues = [
    { name: 'Dinner House',        hours: 'Lunch & Dinner', description: 'Fresh, quality meals served in our main dining hall.', image: 'assets/images/restaurant-main.jpg' },
    { name: 'Luxury Rooftop Bar',  hours: 'Daily',          description: 'Premium drinks and great views from our rooftop bar.', image: 'assets/images/restaurant-accent.jpg' },
    { name: 'Fastfood Center',     hours: 'Lunch & Dinner', description: 'Quick bites and light meals throughout the day.',       image: 'assets/images/restaurant-promo.jpg' }
  ];

  constructor(private locationService: LocationService) {}

  ngOnInit(): void {
    this.location = this.locationService.current!;
    if (this.location.menuCategories.length > 0) {
      this.activeCategory = this.location.menuCategories[0].name;
    }
  }

  get categories(): string[] {
    return ['All', ...this.location.menuCategories.map(c => c.name)];
  }

  get filteredItems() {
    if (this.activeCategory === 'All') {
      return this.location.menuCategories.flatMap(c => c.items);
    }
    return this.location.menuCategories.find(c => c.name === this.activeCategory)?.items ?? [];
  }

  setCategory(cat: string): void {
    this.activeCategory = cat;
  }
}
