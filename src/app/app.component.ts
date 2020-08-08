import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my ecommerce';
  currentUrl: string;
  constructor(private router: Router, private location: Location) {
    this.router.events.subscribe(() => {
      this.currentUrl = this.location.path();
    });
  }
}
