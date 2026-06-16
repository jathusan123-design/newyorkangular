import { Component } from '@angular/core';

export interface GalleryItem {
  id: number;
  image: string;
  title: string;
  category: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  categories = ['All', 'Rooms', 'Restaurant', 'Spa', 'Pool', 'Events'];
  activeCategory = 'All';

  lightboxOpen = false;
  lightboxIndex = 0;

  items: GalleryItem[] = [
    { id: 1,  image: 'assets/images/gallery-1.jpg',  title: 'Delux Family Room',      category: 'Rooms'      },
    { id: 2,  image: 'assets/images/gallery-2.jpg',  title: 'Double Suite Interior',  category: 'Rooms'      },
    { id: 3,  image: 'assets/images/gallery-3.jpg',  title: 'Fine Dining Hall',        category: 'Restaurant' },
    { id: 4,  image: 'assets/images/gallery-4.jpg',  title: 'Signature Dishes',        category: 'Restaurant' },
    { id: 5,  image: 'assets/images/gallery-5.jpg',  title: 'Spa Treatment Room',      category: 'Spa'        },
    { id: 6,  image: 'assets/images/gallery-6.jpg',  title: 'Relaxation Lounge',       category: 'Spa'        },
    { id: 7,  image: 'assets/images/gallery-7.jpg',  title: 'Indoor Swimming Pool',    category: 'Pool'       },
    { id: 8,  image: 'assets/images/gallery-8.jpg',  title: 'Pool Terrace',            category: 'Pool'       },
    { id: 9,  image: 'assets/images/gallery-9.jpg',  title: 'Grand Ballroom',          category: 'Events'     },
    { id: 10, image: 'assets/images/gallery-10.jpg', title: 'East Terrace',            category: 'Events'     },
    { id: 11, image: 'assets/images/gallery-11.jpg', title: 'West Terrace',            category: 'Events'     },
    { id: 12, image: 'assets/images/gallery-12.jpg', title: 'Superior Bedroom View',   category: 'Rooms'      }
  ];

  get filteredItems(): GalleryItem[] {
    if (this.activeCategory === 'All') return this.items;
    return this.items.filter(i => i.category === this.activeCategory);
  }

  setCategory(cat: string): void {
    this.activeCategory = cat;
  }

  openLightbox(index: number): void {
    this.lightboxIndex = index;
    this.lightboxOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox(): void {
    this.lightboxOpen = false;
    document.body.style.overflow = '';
  }

  prevImage(): void {
    const len = this.filteredItems.length;
    this.lightboxIndex = (this.lightboxIndex - 1 + len) % len;
  }

  nextImage(): void {
    this.lightboxIndex = (this.lightboxIndex + 1) % this.filteredItems.length;
  }
}
