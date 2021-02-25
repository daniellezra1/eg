import { Component } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({selector: 'ngbd-carousel-basic',
templateUrl: './carousel-basic.component.html',
styleUrls: ['./carousel-basic.component.scss']})
export class NgbdCarouselBasic {
  images = [1, 2, 3, 4, 5, 6].map((n) => `/assets/pictures/${n}.jpg`);

  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
    config.wrap = true;
  }

}