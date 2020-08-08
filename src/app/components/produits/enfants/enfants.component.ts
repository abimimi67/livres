import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Iproduct } from '../../../interfaces/iProduct';

@Component({
  selector: 'app-enfants',
  templateUrl: './enfants.component.html',
  styleUrls: ['./enfants.component.css']
})
export class EnfantsComponent implements OnInit {
enfants: Iproduct[];
defaultImage = '../../../assets/images/200w.webp';

  constructor(private productService: ProductService) { }

  getEnfants(): void {this.enfants = this.productService.getEnfants();}
	ngOnInit() {
   this.getEnfants();
  }

}
