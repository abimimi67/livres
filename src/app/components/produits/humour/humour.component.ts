import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Iproduct } from '../../../interfaces/iProduct';

@Component({
  selector: 'app-humour',
  templateUrl: './humour.component.html',
  styleUrls: ['./humour.component.css']
})
export class HumourComponent implements OnInit {
humour: Iproduct[];
defaultImage = '../../../assets/images/200w.webp';

  constructor(private productService: ProductService) { }

  getHumour(): void {this.humour = this.productService.getHumour();}
	ngOnInit() {
   this.getHumour();
  }

}
