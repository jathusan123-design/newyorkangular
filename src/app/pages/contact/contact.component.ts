import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocationService, SiteLocation } from '../../core/services/location.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  location!: SiteLocation;
  contactForm: FormGroup;
  submitted = false;

  faqs = [
    { q: 'What time is check-in and check-out?',        a: 'Check-in is from 3:00 PM – 9:00 PM. Check-out is by 11:00 AM.', open: false },
    { q: 'Is breakfast included?',                       a: 'Breakfast is included in selected packages. Please confirm at booking.', open: false },
    { q: 'Do you offer airport transfer?',               a: 'Yes, transfer services can be arranged. Please contact us in advance.', open: false },
    { q: 'What is your cancellation policy?',            a: 'Free cancellation up to 48 hours before check-in.', open: false },
    { q: 'Is parking available?',                        a: 'Yes, complimentary private parking is available.', open: false }
  ];

  constructor(private fb: FormBuilder, private locationService: LocationService) {
    this.contactForm = this.fb.group({
      name:    ['', Validators.required],
      email:   ['', [Validators.required, Validators.email]],
      phone:   [''],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {
    this.location = this.locationService.current!;
  }

  get contactInfo() {
    return [
      { icon: 'fas fa-map-marker-alt', title: 'Our Location',  lines: [this.location.name, this.location.address] },
      { icon: 'fas fa-phone-alt',      title: 'Phone Number',  lines: [this.location.phone, ...(this.location.phone2 ? [this.location.phone2] : [])] },
      { icon: 'fas fa-envelope',       title: 'Email Address', lines: [this.location.email] },
      { icon: 'fas fa-clock',          title: 'Working Hours', lines: this.location.hours.split('  |  ') }
    ];
  }

  toggleFaq(i: number): void { this.faqs[i].open = !this.faqs[i].open; }

  onSubmit(): void {
    if (this.contactForm.valid) { this.submitted = true; }
    else { this.contactForm.markAllAsTouched(); }
  }

  isInvalid(field: string): boolean {
    const c = this.contactForm.get(field);
    return !!(c && c.invalid && c.touched);
  }

  resetForm(): void { this.submitted = false; this.contactForm.reset(); }
}
