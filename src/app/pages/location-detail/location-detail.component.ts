import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface LocationRoom {
  name: string;
  price: number;
  unit: string;
  discount: string;
  image: string;
  features: string[];
}

interface LocationData {
  id: string;
  name: string;
  area: string;
  suburb: string;
  heroImage: string;
  description: string;
  phone: string;
  email: string;
  address: string;
  hours: string;
  image: string;
  rooms: LocationRoom[];
  facilities: { icon: string; name: string; desc: string }[];
  manager: { name: string; role: string; image: string; quote: string };
}

const LOCATIONS: LocationData[] = [
  {
    id: 'colombo-5',
    name: 'New York Guest House and Restaurant',
    area: 'Colombo 5',
    suburb: 'Wellawatte',
    heroImage: 'assets/images/location-1.jpg',
    image: 'assets/images/location-1.jpg',
    description: 'Located in the vibrant neighbourhood of Wellawatte, Colombo 05, our first branch offers comfortable rooms, warm hospitality and an excellent dining experience just minutes from the heart of the city.',
    phone: '077 255 5551',
    email: 'newyorkguesthouseandrestaurant@gmail.com',
    address: 'New York Guest House & Restaurant, Colombo 05, Wellawatte, Sri Lanka',
    hours: 'Week Days: 09:00 – 18:00  |  Sunday: Closed',
    rooms: [
      { name: 'Family Room',           price: 10000, unit: 'Day',   discount: '50% off', image: 'assets/images/room-1.jpg', features: ['City View', 'Free Wi-Fi', 'Air Conditioning', 'Room Service'] },
      { name: 'Luxury Room',           price: 8000,  unit: 'Day',   discount: '50% off', image: 'assets/images/room-2.jpg', features: ['City View', 'Free Wi-Fi', 'Air Conditioning', 'Mini Bar'] },
      { name: 'Standard Room',         price: 6000,  unit: 'Day',   discount: '50% off', image: 'assets/images/room-3.jpg', features: ['Free Wi-Fi', 'Air Conditioning', 'Room Service', 'Smart Key'] },
      { name: 'One Bedroom Apartment', price: 11000, unit: 'Day',   discount: '50% off', image: 'assets/images/room-4.jpg', features: ['City View', 'Free Wi-Fi', 'Full Kitchen', 'Private Parking'] },
      { name: 'Two Bedrooms Apartment',price: 15000, unit: 'Day',   discount: '50% off', image: 'assets/images/about-main.jpg', features: ['City View', 'Free Wi-Fi', 'Full Kitchen', 'Private Parking'] }
    ],
    facilities: [
      { icon: 'fas fa-dumbbell',      name: 'Fitness',         desc: 'Gym Training Grounds' },
      { icon: 'fas fa-swimming-pool', name: 'Swimming Pool',   desc: 'Indoor Swimming Pool' },
      { icon: 'fas fa-utensils',      name: 'Restaurant',      desc: 'The Restaurant Center' },
      { icon: 'fas fa-spa',           name: 'SPA',             desc: 'Spa & Wellness' }
    ],
    manager: {
      name: 'John D. Alexon',
      role: 'Manager',
      image: 'assets/images/team-4.jpg',
      quote: 'We are committed to providing every guest with a heartfelt welcome, a comfortable stay, and memories that will bring them back to us time and again.'
    }
  },
  {
    id: 'colombo-6',
    name: 'New York Guest House and Restaurant',
    area: 'Colombo 6',
    suburb: 'Kirulapone',
    heroImage: 'assets/images/location-2.jpg',
    image: 'assets/images/location-2.jpg',
    description: 'Nestled in the peaceful neighbourhood of Kirulapone, Colombo 06, our second branch provides the same exceptional hospitality in a relaxed setting with easy access to local dining and transport links.',
    phone: '077 257 1975',
    email: 'newyorkguesthouseandrestaurant@gmail.com',
    address: 'New York Guest House & Restaurant, Colombo 06, Kirulapone, Sri Lanka',
    hours: 'Week Days: 09:00 – 18:00  |  Sunday: Closed',
    rooms: [
      { name: 'Family Room',           price: 10000, unit: 'Day',   discount: '50% off', image: 'assets/images/room-1.jpg', features: ['City View', 'Free Wi-Fi', 'Air Conditioning', 'Room Service'] },
      { name: 'Luxury Room',           price: 8000,  unit: 'Day',   discount: '50% off', image: 'assets/images/room-2.jpg', features: ['City View', 'Free Wi-Fi', 'Air Conditioning', 'Mini Bar'] },
      { name: 'Standard Room',         price: 6000,  unit: 'Day',   discount: '50% off', image: 'assets/images/room-3.jpg', features: ['Free Wi-Fi', 'Air Conditioning', 'Room Service', 'Smart Key'] },
      { name: 'One Bedroom Apartment', price: 11000, unit: 'Day',   discount: '50% off', image: 'assets/images/room-4.jpg', features: ['City View', 'Free Wi-Fi', 'Full Kitchen', 'Private Parking'] },
      { name: 'Two Bedrooms Apartment',price: 15000, unit: 'Day',   discount: '50% off', image: 'assets/images/about-main.jpg', features: ['City View', 'Free Wi-Fi', 'Full Kitchen', 'Private Parking'] }
    ],
    facilities: [
      { icon: 'fas fa-dumbbell',      name: 'Fitness',         desc: 'Gym Training Grounds' },
      { icon: 'fas fa-swimming-pool', name: 'Swimming Pool',   desc: 'Indoor Swimming Pool' },
      { icon: 'fas fa-utensils',      name: 'Restaurant',      desc: 'The Restaurant Center' },
      { icon: 'fas fa-spa',           name: 'SPA',             desc: 'Spa & Wellness' }
    ],
    manager: {
      name: 'John D. Alexon',
      role: 'Manager',
      image: 'assets/images/team-4.jpg',
      quote: 'At our Colombo 06 branch, every guest is treated like family. We take pride in our warm Sri Lankan hospitality and our commitment to comfort and quality.'
    }
  }
];

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.scss']
})
export class LocationDetailComponent implements OnInit {
  location!: LocationData;
  activeTab = 'overview';

  tabs = [
    { id: 'overview',    label: 'Overview',    icon: 'fas fa-home' },
    { id: 'rooms',       label: 'Rooms',       icon: 'fas fa-bed' },
    { id: 'restaurant',  label: 'Restaurant',  icon: 'fas fa-utensils' },
    { id: 'facilities',  label: 'Facilities',  icon: 'fas fa-swimming-pool' },
    { id: 'contact',     label: 'Contact',     icon: 'fas fa-phone' }
  ];

  stats = [
    { value: '250+', label: 'Luxury Rooms' },
    { value: '4.9',  label: 'Customers Rating' },
    { value: '12k+', label: 'Happy Customers' },
    { value: '32+',  label: 'Years Experience' }
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? 'colombo-5';
    this.location = LOCATIONS.find(l => l.id === id) ?? LOCATIONS[0];
  }

  setTab(id: string): void {
    this.activeTab = id;
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  }
}
