import { Component } from '@angular/core';

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  image: string;
  author: string;
  authorAvatar: string;
  date: string;
  readTime: number;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'Top 5 Restaurants in a Quiet Malmo Street',
    slug: 'top-5-restaurants-quiet-malmo-street',
    excerpt: 'Discover the hidden culinary gems tucked away on the peaceful side streets of Malmo — a food lover\'s guide to unforgettable dining experiences.',
    content: '',
    category: 'Digital Nomad',
    tags: ['restaurant', 'city', 'travels'],
    image: 'assets/images/blog-1.jpg',
    author: 'James Harrison',
    authorAvatar: 'assets/images/team-1.jpg',
    date: '2025-01-10',
    readTime: 5
  },
  {
    id: 2,
    title: 'Feel Like Home on Your Business Trip in Hotel',
    slug: 'feel-like-home-business-trip-hotel',
    excerpt: 'Practical tips and expert advice on how to create a comfortable, productive routine when staying in a hotel for extended business travel.',
    content: '',
    category: 'Tips & Tricks',
    tags: ['hotel', 'booking', 'accommodation'],
    image: 'assets/images/blog-2.jpg',
    author: 'Sophia Laurent',
    authorAvatar: 'assets/images/team-2.jpg',
    date: '2025-01-08',
    readTime: 4
  },
  {
    id: 3,
    title: 'The Ultimate Guide to Luxury Resort Stays',
    slug: 'ultimate-guide-luxury-resort-stays',
    excerpt: 'Everything you need to know before booking a luxury resort — from choosing the right property to maximising your experience on arrival.',
    content: '',
    category: 'Resort',
    tags: ['resort', 'hotel', 'accommodation'],
    image: 'assets/images/blog-3.jpg',
    author: 'David Nguyen',
    authorAvatar: 'assets/images/team-3.jpg',
    date: '2025-01-05',
    readTime: 7
  },
  {
    id: 4,
    title: 'New York City: A Traveller\'s City Guide',
    slug: 'new-york-city-travellers-guide',
    excerpt: 'From iconic skyline views to neighbourhood secrets, our curated city guide helps you discover the very best New York has to offer.',
    content: '',
    category: 'City Guide',
    tags: ['city', 'travels', 'hostel'],
    image: 'assets/images/blog-4.jpg',
    author: 'Amelia Brooks',
    authorAvatar: 'assets/images/team-4.jpg',
    date: '2024-12-28',
    readTime: 6
  },
  {
    id: 5,
    title: 'Interior Design Trends Shaping Luxury Hotels',
    slug: 'interior-design-trends-luxury-hotels',
    excerpt: 'An inside look at the bold interior design movements transforming the world\'s most prestigious hotels into architectural masterpieces.',
    content: '',
    category: 'INTERIOR',
    tags: ['hotel', 'reservation'],
    image: 'assets/images/blog-5.jpg',
    author: 'James Harrison',
    authorAvatar: 'assets/images/team-1.jpg',
    date: '2024-12-20',
    readTime: 5
  },
  {
    id: 6,
    title: 'Digital Nomad Hotspots: Where to Work & Stay',
    slug: 'digital-nomad-hotspots-work-stay',
    excerpt: 'The best destinations around the world for digital nomads — combining reliable connectivity, inspiring surroundings and exceptional accommodation.',
    content: '',
    category: 'Digital Nomad',
    tags: ['travels', 'accommodation', 'city'],
    image: 'assets/images/blog-6.jpg',
    author: 'Sophia Laurent',
    authorAvatar: 'assets/images/team-2.jpg',
    date: '2024-12-15',
    readTime: 8
  },
  {
    id: 7,
    title: 'How to Find Hidden New Places Worth Visiting',
    slug: 'find-hidden-new-places-worth-visiting',
    excerpt: 'Break away from tourist trails and uncover the authentic, undiscovered destinations that make every journey truly memorable.',
    content: '',
    category: 'New Places',
    tags: ['travels', 'city', 'hostel'],
    image: 'assets/images/blog-7.jpg',
    author: 'David Nguyen',
    authorAvatar: 'assets/images/team-3.jpg',
    date: '2024-12-10',
    readTime: 5
  },
  {
    id: 8,
    title: '10 Tips for Making the Most of Your Hotel Stay',
    slug: '10-tips-making-most-hotel-stay',
    excerpt: 'Insider tips from hospitality professionals on how to upgrade your hotel experience, from check-in perks to secret amenities.',
    content: '',
    category: 'Tips & Tricks',
    tags: ['hotel', 'booking', 'reservation'],
    image: 'assets/images/blog-8.jpg',
    author: 'Amelia Brooks',
    authorAvatar: 'assets/images/team-4.jpg',
    date: '2024-12-05',
    readTime: 4
  },
  {
    id: 9,
    title: 'Spa & Wellness: The New Hotel Experience',
    slug: 'spa-wellness-new-hotel-experience',
    excerpt: 'How luxury hotels are reimagining wellness programmes to offer guests transformative health and relaxation experiences during their stay.',
    content: '',
    category: 'Resort',
    tags: ['resort', 'accommodation'],
    image: 'assets/images/blog-9.jpg',
    author: 'James Harrison',
    authorAvatar: 'assets/images/team-1.jpg',
    date: '2024-11-28',
    readTime: 6
  }
];

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  categories = ['All', 'City Guide', 'Digital Nomad', 'INTERIOR', 'New Places', 'Resort', 'Tips & Tricks'];
  activeCategory = 'All';
  searchQuery = '';

  allPosts = BLOG_POSTS;

  recentPosts = BLOG_POSTS.slice(0, 4);

  tags = ['accommodation', 'apartment', 'booking', 'city', 'hostel', 'hotel', 'reservation', 'resort', 'restaurant', 'rooms', 'travels'];

  get filteredPosts(): BlogPost[] {
    return this.allPosts.filter(p => {
      const matchCat   = this.activeCategory === 'All' || p.category === this.activeCategory;
      const matchSearch = !this.searchQuery ||
        p.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(this.searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }

  setCategory(cat: string): void {
    this.activeCategory = cat;
  }

  formatDate(dateStr: string): string {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }
}
