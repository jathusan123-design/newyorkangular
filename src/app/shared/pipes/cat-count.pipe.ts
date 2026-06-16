import { Pipe, PipeTransform } from '@angular/core';
import { BlogPost } from '../../pages/blog/blog.component';

@Pipe({ name: 'catCount' })
export class CatCountPipe implements PipeTransform {
  transform(posts: BlogPost[], category: string): number {
    return posts.filter(p => p.category === category).length;
  }
}
