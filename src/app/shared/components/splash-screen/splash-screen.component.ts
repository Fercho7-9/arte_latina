import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { SplashAnimationType } from './splash-animation-type';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SplashScreenComponent implements OnInit {

  windowWith!: string;
  showSplash: boolean = true;
  opacityChange: number = 1;
  splashTransition: string = '';

  @Input() animationDuration: number = 0.3;
  @Input() duration: number = 3;
  @Input() animationType: SplashAnimationType = SplashAnimationType.SlideLeft;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      let transitionStyle = '';

      switch (this.animationType) {
        case SplashAnimationType.SlideLeft:
          this.windowWith = '-' + window.innerWidth + 'px';
          transitionStyle = 'left' + this.animationDuration + 's';
          break;
        case SplashAnimationType.SlideRight:
          this.windowWith = '-' + window.innerWidth + 'px';
          transitionStyle = 'right' + this.animationDuration + 's';
          break;
        case SplashAnimationType.FadeOut:
          transitionStyle = 'opacity' + this.animationDuration + 's';
          this.opacityChange = 0;
          break;
        default:
          this.windowWith = '-' + window.innerWidth + 'px';
          transitionStyle = 'left' + this.animationDuration + 's';
          break;
      }
      this.splashTransition = transitionStyle;
    }, this.duration * 200);
  }

}
