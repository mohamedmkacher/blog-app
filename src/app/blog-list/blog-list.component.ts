import { Component } from '@angular/core';
import { Blog } from '../model/blog';
import { BlogAddComponent } from '../blog-add/blog-add.component';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [BlogAddComponent],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css',
})
export class BlogListComponent {
  decrementerBlog(decIndex: number) {
    this.blogs[decIndex].score = -1;
    this.sortBlogs();
  }
  incrementerBlog(incIndex: number) {
    this.blogs[incIndex].score = 1;
    this.sortBlogs();
  }
  reset() {
    this.blogs = this.defaultBlogs;
    this.changeAction('');
    this.sortBlogs();
  }
  rechercherBlog(rech: string) {
    this.defaultBlogs = this.blogs;
    this.blogs = this.blogs.filter((blog) =>
      blog.title.toLowerCase().includes(rech.toLowerCase())
    );
    console.log(this.defaultBlogs);
  }
  addBlog(blog: Blog) {
    this.blogs = [...this.blogs, blog];
    this.changeAction('');
    this.sortBlogs();
  }
  action = '';

  changeAction(action: string) {
    this.action = action;
  }

  title = "Blogs' list";
  defaultBlogs = [new Blog('', '', '', '', 0)];
  blogs = [
    new Blog(
      'b1.jpg',
      'Introducing the latest and greatest tools for developers',
      'New developer tools empower to build the next generation of applications',
      '01/01/2024',
      0
    ),
    new Blog(
      'b2.jpg',
      'New developer tools empower to build the next generation of applications',
      'Robots set to take on more complex tasks in the future',
      '02/01/2024',
      0
    ),
    new Blog(
      'b3.jpg',
      'How AR will transform our lives in 2050',
      'Augmented Reality set to revolutionize daily life in 2050',
      '03/01/2024',
      0
    ),
    new Blog(
      'b4.jpg',
      'Creating sustainable cities and the role of green urbanism',
      'Green urbanism: a key strategy for creating sustainable cities',
      '04/01/2024',
      0
    ),
  ];
  sortBlogs() {
    this.blogs.sort((a: Blog, b: Blog) => {
      return b.score - a.score;
    });
  }
}
