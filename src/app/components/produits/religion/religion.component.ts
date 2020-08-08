import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Iproduct } from '../../../interfaces/iProduct';

@Component({
  selector: 'app-religion',
  templateUrl: './religion.component.html',
  styleUrls: ['./religion.component.css']
})
export class ReligionComponent implements OnInit {
religion: Iproduct[];
defaultImage = '../../../assets/images/200w.webp';

  constructor(private productService: ProductService) { }

  getReligion(): void {this.religion = this.productService.getReligion();}
	ngOnInit() {
   this.getReligion();
  }

}
