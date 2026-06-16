import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { LocationService } from './core/services/location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLoading = true;
  isPickerPage = false;

  constructor(private router: Router, public locationService: LocationService) {}

  ngOnInit(): void {
    setTimeout(() => { this.isLoading = false; }, 1000);

    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: any) => {
        this.isPickerPage = e.urlAfterRedirects === '/' || e.urlAfterRedirects === '';
      });

    // Set initial state
    this.isPickerPage = this.router.url === '/' || this.router.url === '';
  }
}
