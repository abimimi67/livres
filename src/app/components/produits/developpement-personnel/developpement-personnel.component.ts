import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Iproduct } from '../../../interfaces/iProduct';

@Component({
  selector: 'app-developpement-personnel',
  templateUrl: './developpement-personnel.component.html',
  styleUrls: ['./developpement-personnel.component.css']
})
export class DeveloppementPersonnelComponent implements OnInit {
developpementpersonnel: Iproduct[];
defaultImage = '../../../assets/images/200w.webp';

  constructor(private productService: ProductService) { }

  getDeveloppementpersonnel(): void {this.developpementpersonnel = this.productService.getDeveloppementpersonnel();}
	ngOnInit() {
   this.getDeveloppementpersonnel();
  }

}
