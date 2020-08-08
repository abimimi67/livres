import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Iproduct } from '../../../interfaces/iProduct';

@Component({
  selector: 'app-philosophie',
  templateUrl: './philosophie.component.html',
  styleUrls: ['./philosophie.component.css']
})
export class PhilosophieComponent implements OnInit {
philosophie: Iproduct[];
defaultImage = '../../../assets/images/200w.webp';

  constructor(private productService: ProductService) { }

  getPhilosophie(): void {this.philosophie = this.productService.getPhilosophie();}
	ngOnInit() {
   this.getPhilosophie();
  }

}
