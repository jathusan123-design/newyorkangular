import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface LocationRoom {
  id: number;
  name: string;
  price: number;
  unit: string;
  discount: string;
  image: string;
  features: string[];
}

export interface LocationMenuCategory {
  name: string;
  items: { name: string; price: number; currency: string; description: string; image: string; badge?: string }[];
}

export interface SiteLocation {
  id: string;
  name: string;
  area: string;
  suburb: string;
  phone: string;
  phone2?: string;
  email: string;
  address: string;
  hours: string;
  heroImage: string;
  cardImage: string;
  description: string;
  rooms: LocationRoom[];
  menuCategories: LocationMenuCategory[];
  facilities: { icon: string; name: string; desc: string }[];
  manager: { name: string; role: string; image: string; quote: string };
  testimonials: { name: string; role: string; text: string; rating: number }[];
  socialFacebook: string;
  socialInstagram: string;
}

export const LOCATIONS: SiteLocation[] = [
  {
    id: 'colombo-5',
    name: 'New York Guest House and Restaurant',
    area: 'Colombo 5',
    suburb: 'Wellawatte',
    phone: '077 255 5551',
    email: 'newyorkguesthouseandrestaurant@gmail.com',
    address: 'New York Guest House & Restaurant, Colombo 05, Wellawatte, Sri Lanka',
    hours: 'Week Days: 09:00 – 18:00  |  Sunday: Closed',
    heroImage: 'assets/images/location-1.jpg',
    cardImage: 'assets/images/location-1.jpg',
    description: '2 Hotels locating in Wellawatte and Kirulapone helping with providing customers with a hearty warm welcome with a friendly homely environment. Located in Wellawatte, Colombo 05, our first branch offers 5 room and apartment types.',
    socialFacebook: 'https://www.facebook.com/share/1McEinJCGb/',
    socialInstagram: 'https://instagram.com/newyorkguesthouseandbar',
    rooms: [
      { id: 1, name: 'Family Room',            price: 10000, unit: 'Day', discount: '50% off', image: 'assets/images/room-1.jpg', features: ['City View', 'Free Wi-Fi', 'Air Conditioning', 'Room Service'] },
      { id: 2, name: 'Luxury Room',             price: 8000,  unit: 'Day', discount: '50% off', image: 'assets/images/room-2.jpg', features: ['City View', 'Free Wi-Fi', 'Air Conditioning', 'Mini Bar'] },
      { id: 3, name: 'Standard Room',           price: 6000,  unit: 'Day', discount: '50% off', image: 'assets/images/room-3.jpg', features: ['Free Wi-Fi', 'Air Conditioning', 'Room Service', 'Smart Key'] },
      { id: 4, name: 'One Bedroom Apartment',   price: 11000, unit: 'Day', discount: '50% off', image: 'assets/images/room-4.jpg', features: ['City View', 'Free Wi-Fi', 'Full Kitchen', 'Private Parking'] },
      { id: 5, name: 'Two Bedrooms Apartment',  price: 15000, unit: 'Day', discount: '50% off', image: 'assets/images/about-main.jpg', features: ['City View', 'Free Wi-Fi', 'Full Kitchen', 'Private Parking'] }
    ],
    menuCategories: [
      {
        name: 'Beverages',
        items: [
          { name: 'Double Espresso',  price: 1.50, currency: '$', description: 'A rich, bold double shot of freshly ground espresso.',             image: 'assets/images/menu-1.jpg', badge: 'Popular' },
          { name: 'Hot Chocolate',    price: 3.50, currency: '$', description: 'Creamy, indulgent hot chocolate made with premium cocoa.',         image: 'assets/images/menu-2.jpg' },
          { name: 'Coffee with Milk', price: 3.50, currency: '$', description: 'A smooth blend of freshly brewed coffee and steamed milk.',        image: 'assets/images/menu-3.jpg' },
          { name: 'Pour Over Coffee', price: 4.50, currency: '$', description: 'Single-origin pour over brewed to order — clean, bright flavour.', image: 'assets/images/menu-4.jpg' }
        ]
      },
      {
        name: 'Desserts',
        items: [
          { name: 'Chocolate Ice Cream',  price: 2.50, currency: '$', description: 'Rich, velvety chocolate ice cream made from Belgian chocolate.',          image: 'assets/images/menu-5.jpg' },
          { name: 'Chocolate Cake',       price: 5.50, currency: '$', description: 'Decadent triple-layer chocolate cake with ganache frosting.',              image: 'assets/images/menu-6.jpg', badge: 'Signature' },
          { name: 'Classic Cheesecake',   price: 4.50, currency: '$', description: 'New York-style baked cheesecake with a buttery biscuit base.',             image: 'assets/images/menu-7.jpg', badge: 'Popular' },
          { name: 'Vegan Cheesecake',     price: 7.50, currency: '$', description: 'A 100% plant-based cheesecake crafted with cashew cream.',                  image: 'assets/images/menu-8.jpg' }
        ]
      }
    ],
    facilities: [
      { icon: 'fas fa-dumbbell',      name: 'Fitness',       desc: 'Gym Training Grounds' },
      { icon: 'fas fa-swimming-pool', name: 'Swimming Pool', desc: 'Indoor Swimming Pool' },
      { icon: 'fas fa-utensils',      name: 'Restaurant',    desc: 'The Restaurant Center' },
      { icon: 'fas fa-spa',           name: 'SPA',           desc: 'Spa & Wellness' }
    ],
    manager: {
      name: 'John D. Alexon', role: 'Manager', image: 'assets/images/team-4.jpg',
      quote: 'Model. Appropriately create interactive infrastructures after main. Holisticly facilitate stand-alone experiences for guests in the heart of the world.'
    },
    testimonials: [
      { name: 'Allena Gomez', role: 'Guest',   text: 'We loved our stay. The room was spotless and spacious, and the amenities were excellent. The staff went above and beyond to make sure we had everything we needed. We will definitely be booking again!', rating: 5 },
      { name: 'John D. Alexon', role: 'Guest', text: 'A perfect getaway spot! Great location in the heart of the city, very clean rooms and the food at the restaurant was delicious. Will definitely come back.', rating: 5 },
      { name: 'Allena Gomez', role: 'Manager', text: 'Professionally repurpose flexible testing procedures in customer service. Dynamically reconceptualize value-added systems before manufactured products.', rating: 5 }
    ]
  },
  {
    id: 'colombo-6',
    name: 'New York Guest House and Restaurant',
    area: 'Colombo 6',
    suburb: 'Kirulapone',
    phone: '077 257 1975',
    phone2: '077 255 5551',
    email: 'newyorkguesthouseandrestaurant@gmail.com',
    address: 'New York Guest House & Restaurant, Colombo 06, Kirulapone, Sri Lanka',
    hours: 'Week Days: 09:00 – 18:00  |  Sunday: Closed',
    heroImage: 'assets/images/location-2.jpg',
    cardImage: 'assets/images/location-2.jpg',
    description: 'Nestled in the peaceful neighbourhood of Kirulapone, Colombo 06. 2 Hotels locating in Wellawatte and Kirulapone helping with providing customers with a hearty warm welcome with a friendly homely environment.',
    socialFacebook: 'https://www.facebook.com/share/1McEinJCGb/',
    socialInstagram: 'https://instagram.com/newyorkguesthouseandbar',
    rooms: [
      { id: 1, name: 'Standard Room',          price: 5000, unit: 'Night', discount: '50% off', image: 'assets/images/room-1.jpg', features: ['City View', 'Free Wi-Fi', 'Air Conditioning', 'Room Service'] },
      { id: 2, name: 'Luxury Room',             price: 6000, unit: 'Day',   discount: '50% off', image: 'assets/images/room-2.jpg', features: ['City View', 'Free Wi-Fi', 'Air Conditioning', 'Mini Bar'] },
      { id: 3, name: 'Two Bedrooms Apartment',  price: 9000, unit: 'Night', discount: '50% off', image: 'assets/images/room-3.jpg', features: ['City View', 'Free Wi-Fi', 'Full Kitchen', 'Private Parking'] }
    ],
    menuCategories: [
      {
        name: 'Beverages',
        items: [
          { name: 'Double Espresso',  price: 1.50, currency: '$', description: 'A rich, bold double shot of freshly ground espresso.',             image: 'assets/images/menu-1.jpg', badge: 'Popular' },
          { name: 'Hot Chocolate',    price: 3.50, currency: '$', description: 'Creamy, indulgent hot chocolate made with premium cocoa.',         image: 'assets/images/menu-2.jpg' },
          { name: 'Coffee with Milk', price: 3.50, currency: '$', description: 'A smooth blend of freshly brewed coffee and steamed milk.',        image: 'assets/images/menu-3.jpg' },
          { name: 'Pour Over Coffee', price: 4.50, currency: '$', description: 'Single-origin pour over brewed to order — clean, bright flavour.', image: 'assets/images/menu-4.jpg' }
        ]
      },
      {
        name: 'Desserts',
        items: [
          { name: 'Chocolate Ice Cream',  price: 2.50, currency: '$', description: 'Rich, velvety chocolate ice cream made from Belgian chocolate.',          image: 'assets/images/menu-5.jpg' },
          { name: 'Chocolate Cake',       price: 5.50, currency: '$', description: 'Decadent triple-layer chocolate cake with ganache frosting.',              image: 'assets/images/menu-6.jpg', badge: 'Signature' },
          { name: 'Classic Cheesecake',   price: 4.50, currency: '$', description: 'New York-style baked cheesecake with a buttery biscuit base.',             image: 'assets/images/menu-7.jpg', badge: 'Popular' },
          { name: 'Vegan Cheesecake',     price: 7.50, currency: '$', description: 'A 100% plant-based cheesecake crafted with cashew cream.',                  image: 'assets/images/menu-8.jpg' }
        ]
      }
    ],
    facilities: [
      { icon: 'fas fa-dumbbell',      name: 'Fitness',       desc: 'Gym Training Grounds' },
      { icon: 'fas fa-swimming-pool', name: 'Swimming Pool', desc: 'Indoor Swimming Pool' },
      { icon: 'fas fa-utensils',      name: 'Restaurant',    desc: 'The Restaurant Center' },
      { icon: 'fas fa-spa',           name: 'SPA',           desc: 'Spa & Wellness' }
    ],
    manager: {
      name: 'John D. Alexon', role: 'Manager', image: 'assets/images/team-4.jpg',
      quote: 'Model. Appropriately create interactive infrastructures after main. Holisticly facilitate stand-alone experiences for guests in the heart of the world.'
    },
    testimonials: [
      { name: 'Allena Gomez', role: 'Guest',   text: 'We loved our stay. The room was spotless and spacious, and the amenities were excellent. The staff went above and beyond to make sure we had everything we needed. We will definitely be booking again!', rating: 5 },
      { name: 'John D. Alexon', role: 'Guest', text: 'A perfect getaway spot! Great location in the heart of the city, very clean rooms and the food at the restaurant was delicious. Will definitely come back.', rating: 5 },
      { name: 'Allena Gomez', role: 'Manager', text: 'Professionally repurpose flexible testing procedures in customer service. Dynamically reconceptualize value-added systems before manufactured products.', rating: 5 }
    ]
  }
];

@Injectable({ providedIn: 'root' })
export class LocationService {
  private readonly STORAGE_KEY = 'ny_selected_location';

  private _selected = new BehaviorSubject<SiteLocation | null>(this.loadFromStorage());

  readonly selected$ = this._selected.asObservable();

  get current(): SiteLocation | null {
    return this._selected.value;
  }

  get isSelected(): boolean {
    return this._selected.value !== null;
  }

  select(id: string): void {
    const loc = LOCATIONS.find(l => l.id === id) ?? null;
    this._selected.next(loc);
    if (loc) {
      sessionStorage.setItem(this.STORAGE_KEY, loc.id);
    }
  }

  clear(): void {
    this._selected.next(null);
    sessionStorage.removeItem(this.STORAGE_KEY);
  }

  getAll(): SiteLocation[] {
    return LOCATIONS;
  }

  private loadFromStorage(): SiteLocation | null {
    const id = sessionStorage.getItem(this.STORAGE_KEY);
    return id ? (LOCATIONS.find(l => l.id === id) ?? null) : null;
  }
}
