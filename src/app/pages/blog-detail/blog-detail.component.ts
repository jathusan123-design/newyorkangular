import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BLOG_POSTS, BlogPost } from '../blog/blog.component';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  post: BlogPost | undefined;
  relatedPosts: BlogPost[] = [];
  commentForm!: FormGroup;
  commentSubmitted = false;

  readonly fullContent = `
    <p>Quisque pretium fermentum quam, sit amet cursus ante sollicitudin vel. Morbi consequat risus consequat, porttitor orci sit amet, iaculis nisl. Integer quis sapien nec elit ultrices euismod sit amet id lacus. Pellentesque euismod arcu sit amet sem dignissim, at posuere risus semper.</p>

    <p>Professionally deliver fully researched scenarios with turnkey communities. Competently expedite resource sucking e-commerce via interdependent experiences. Distinctively leverage other's distinctive quality vectors for business applications.</p>

    <h3>What Makes a Truly Memorable Stay?</h3>

    <p>Uniquely impact innovative communities rather than holistic innovation. Proactively leverage other's revolutionary e-tailers whereas progressive relationships. Rapidiously expedite e-business sources whereas cross-unit applications through holistic core competencies.</p>

    <blockquote>
      "The best hotels understand that true luxury is not about opulence — it is about perfect attention to every small detail that makes a guest feel uniquely cared for."
    </blockquote>

    <p>Collaboratively incubate sustainable infomediaries and multimedia based networks. Conveniently fabricate clicks-and-mortar resources for cross-unit total linkage. Enthusiastically leverage existing mission-critical internal or "organic" sources via proactive methods of empowerment.</p>

    <h3>Key Factors to Consider</h3>

    <ul>
      <li>Location and accessibility to key attractions</li>
      <li>Quality and diversity of dining options</li>
      <li>Spa, wellness and leisure facilities</li>
      <li>Personalised service and concierge support</li>
      <li>Room design, technology and sustainability</li>
    </ul>

    <p>Rapidiously visualize technically sound information and an expanded array of best practices. Dynamically recaptiualize cross-unit convergence through premium opportunities before just-in-time experiences deliver value through collaborative relationships.</p>
  `;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.post = BLOG_POSTS.find(p => p.id === id) ?? BLOG_POSTS[0];
    this.relatedPosts = BLOG_POSTS.filter(p => p.id !== this.post!.id).slice(0, 3);

    this.commentForm = this.fb.group({
      name:    ['', Validators.required],
      email:   ['', [Validators.required, Validators.email]],
      comment: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  submitComment(): void {
    if (this.commentForm.valid) {
      this.commentSubmitted = true;
    }
  }

  formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric'
    });
  }
}
