import { Component, EventEmitter, Output } from '@angular/core';
import { Blog } from '../model/blog';

@Component({
  selector: 'app-blog-add',
  standalone: true,
  imports: [],
  templateUrl: './blog-add.component.html',
  styleUrl: './blog-add.component.css',
})
export class BlogAddComponent {
  @Output() blogCreated = new EventEmitter<Blog>();

  addBlog(img: string, titre: string, desc: string, date: string) {
    const newBlog = new Blog(img, titre, desc, date, 0);
    this.blogCreated.emit(newBlog);
  }
}
