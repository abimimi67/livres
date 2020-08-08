import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teaser',
  templateUrl: './teaser.component.html',
  styleUrls: ['./teaser.component.css']
})
export class TeaserComponent implements OnInit {
  defaultImage = './assets/images/200w.webp';
  image = './assets/images/teaser2.jpg';

  constructor() { }

  ngOnInit() {
  }

}
