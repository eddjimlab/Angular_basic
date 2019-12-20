import {Component} from '@angular/core';

export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {title: 'Обучение Angular', text: 'Хочу выучить Angular', id: 1},
    {title: 'Обучение Vue', text: 'Продолжаю учить Vue', id: 2}
  ];

  updatePosts(post: Post) {
    this.posts.unshift(post);
  }
}
