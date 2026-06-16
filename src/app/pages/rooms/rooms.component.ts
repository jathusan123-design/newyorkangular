import { Component, OnInit } from '@angular/core';
import { LocationService, SiteLocation, LocationRoom } from '../../core/services/location.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  location!: SiteLocation;
  categories: string[] = ['All'];
  activeCategory = 'All';

  constructor(private locationService: LocationService) {}

  ngOnInit(): void {
    this.location = this.locationService.current!;
    const cats = [...new Set(this.location.rooms.map(r => r.name.replace(/\d+.*/, '').trim()))];
    this.categories = ['All', 'Rooms', 'Apartments'];
  }

  get filteredRooms(): LocationRoom[] {
    if (this.activeCategory === 'All') return this.location.rooms;
    if (this.activeCategory === 'Apartments') return this.location.rooms.filter(r => r.name.includes('Apartment'));
    return this.location.rooms.filter(r => !r.name.includes('Apartment'));
  }

  setCategory(cat: string): void {
    this.activeCategory = cat;
  }
}
