import {Component} from '@angular/core';
import {animate, group, keyframes, query, state, style, transition, trigger} from '@angular/animations';
import {boxAnimation} from './animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [boxAnimation]
})
export class AppComponent {
  boxState = 'start';
  visible = true;

  animate() {
    this.boxState = this.boxState === 'end' ? 'start' : 'end';
  }

  animationStart(event: AnimationEvent) {
    console.log('Animation start', event);
  }

  animationDone(event: AnimationEvent) {
    console.log('Animation done', event);
  }
}
