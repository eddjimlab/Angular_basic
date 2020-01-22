import {animate, animation, keyframes, style} from '@angular/animations';

export const reusableAnimation = animation([
    animate('5s', keyframes([
      style({color: 'yellow'}),
      style({color: 'red'}),
      style({color: 'green'}),
      style({color: 'blue'}),
    ]))
  ]
);
