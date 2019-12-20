import {Component} from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  post: Post[] = [
    {title: 'Angular', text: 'I must learn this topic', id: 1},
    {title: 'Vue', text: 'I dont`t have to forget Vue', id: 2},
  ];

  updatePost(newPost: Post) {
    this.post.unshift(newPost);
  }
}
