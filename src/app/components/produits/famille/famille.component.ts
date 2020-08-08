import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Iproduct } from '../../../interfaces/iProduct';

@Component({
  selector: 'app-famille',
  templateUrl: './famille.component.html',
  styleUrls: ['./famille.component.css']
})
export class FamilleComponent implements OnInit {
famille: Iproduct[];
defaultImage = '../../../assets/images/200w.webp';

  constructor(private productService: ProductService) { }

  getFamille(): void {this.famille = this.productService.getFamille();}
	ngOnInit() {
   this.getFamille();
  }

}
