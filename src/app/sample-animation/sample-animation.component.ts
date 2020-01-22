import {Component, OnInit} from '@angular/core';
import {animate, keyframes, state, style, transition, trigger, useAnimation} from '@angular/animations';
import {reusableAnimation} from './reusable.animation';


@Component({
  selector: 'app-sample-animation',
  templateUrl: './sample-animation.component.html',
  styleUrls: ['./sample-animation.component.css'],
  animations: [
    trigger('wrap', [
      state('start', style({color: 'blue'})),
      state('end', style({
        color: 'red',
        transform: 'translate(2rem)'
      })),
      transition('start <=> end', animate('500ms')),
      // transition('start => end', animate('500ms')),
      transition(':enter', [
        useAnimation(reusableAnimation)
      ]),
    ])
  ]
})
export class SampleAnimationComponent implements OnInit {
  wrapState = 'start';

  ngOnInit() {

  }

  toggle() {
    this.wrapState = this.wrapState === 'start' ? 'end' : 'start';
  }
}
