import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocationService, SiteLocation, LOCATIONS } from '../../core/services/location.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  locations: SiteLocation[] = LOCATIONS;

  constructor(private locationService: LocationService, private router: Router) {}

  select(loc: SiteLocation): void {
    this.locationService.select(loc.id);
    this.router.navigate(['/about']);
  }
}
