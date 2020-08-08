import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Iproduct } from '../../../interfaces/iProduct';

@Component({
  selector: 'app-romance',
  templateUrl: './romance.component.html',
  styleUrls: ['./romance.component.css']
})
export class RomanceComponent implements OnInit {
romance: Iproduct[];
defaultImage = '../../../assets/images/200w.webp';

  constructor(private productService: ProductService) { }

  getRomance(): void {this.romance = this.productService.getRomance();}
	ngOnInit() {
   this.getRomance();
  }

}
