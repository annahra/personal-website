import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-portfolio-slides',
  templateUrl: './portfolio-slides.component.html',
  styleUrls: ['./portfolio-slides.component.scss'],
})
export class PortfolioSlidesComponent implements OnInit {

  @ViewChild(IonSlides) slides: IonSlides;

  constructor() { }

  ngOnInit() {}

  // slidePrev() {
  //   this.slides.slidePrev();
  // }

  // slideNext() {
  //   this.slides.slideNext();
  // }
}
