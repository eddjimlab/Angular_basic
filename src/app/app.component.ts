import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  e: number = Math.E;
  str = 'hello world';
  date: Date = new Date();
  float = 0.42;
  obj = {
    a: 2,
    b: {
      c: 3,
      d: {
        f: 4
      }
    }
  };
}
