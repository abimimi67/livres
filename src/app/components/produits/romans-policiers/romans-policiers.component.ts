import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Iproduct } from '../../../interfaces/iProduct';

@Component({
  selector: 'app-romans-policiers',
  templateUrl: './romans-policiers.component.html',
  styleUrls: ['./romans-policiers.component.css']
})
export class RomansPoliciersComponent implements OnInit {
romanspoliciers: Iproduct[];
defaultImage = '../../../assets/images/200w.webp';

  constructor(private productService: ProductService) { }

  getRomanspoliciers(): void {this.romanspoliciers = this.productService.getRomanspoliciers();}
	ngOnInit() {
   this.getRomanspoliciers();
  }

}
