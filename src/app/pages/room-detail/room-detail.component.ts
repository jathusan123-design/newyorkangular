import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocationService, LocationRoom } from '../../core/services/location.service';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.scss']
})
export class RoomDetailComponent implements OnInit {
  room: LocationRoom | undefined;
  relatedRooms: LocationRoom[] = [];
  bookingForm!: FormGroup;
  bookingSubmitted = false;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private locationService: LocationService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const rooms = this.locationService.current?.rooms ?? [];
    this.room = rooms.find(r => r.id === id) ?? rooms[0];
    this.relatedRooms = rooms.filter(r => r.id !== this.room?.id).slice(0, 3);

    this.bookingForm = this.fb.group({
      name:     ['', Validators.required],
      email:    ['', [Validators.required, Validators.email]],
      phone:    ['', Validators.required],
      checkIn:  ['', Validators.required],
      checkOut: ['', Validators.required],
      guests:   [2, [Validators.required, Validators.min(1)]]
    });
  }

  submitBooking(): void {
    if (this.bookingForm.valid) {
      this.bookingSubmitted = true;
    }
  }
}
