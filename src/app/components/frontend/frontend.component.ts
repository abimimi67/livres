import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.css']
})
export class FrontendComponent implements OnInit {
  defaultImage = '../../../assets/images/200w.webp';
  // defaultImage = 'https://www.placecage.com/1000/1000';
  images = `https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?fm=jpg 700w,
            https://images.unsplash.com/photo-1437818628339-19ded67ade8e?fm=jpg 1100w`
  constructor() { }

  ngOnInit() {
  }

}
