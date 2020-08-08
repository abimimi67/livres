import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import {Iproduct} from '../../../interfaces/iProduct';
import { ROMANSPOLICIERS } from '../../../data/romans-policiers';


@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  item: Iproduct;

  constructor(private route: ActivatedRoute, private productService: ProductService) {
  }

  ngOnInit() {
    // Deux possibilités de récupérer les infos via la route
    // 1- avec snapshot  (https://www.youtube.com/watch?v=3r43-VITWrU)
    // 2- avec subscribe (https://www.youtube.com/watch?v=jZJY70PY10w)

    // Pour retirer les tirets
    let myData = this.route.snapshot.url[0].path.replace('-', '');
    // Pour avoir la premiere lettre en capitale
    myData = myData[0].toUpperCase() + myData.substr(1).toLowerCase();

    const id = +this.route.snapshot.params.id;
    if (myData === 'Romanspoliciers'){
      // pour récupérer l'élément du tableau (getRomanspoliciers()) qui se trouve à la position correspondant à la valeur de l'id
      this.item = this.productService.getRomanspoliciers().find(e => e.id === id);
    }
    else if (myData === 'Enfants'){
      this.item = this.productService.getEnfants().find(e => e.id === id);
    }
    else if (myData === 'Religion'){
      this.item = this.productService.getReligion().find(e => e.id === id);
    }
    else if (myData === 'Humour'){
      this.item = this.productService.getHumour().find(e => e.id === id);
    }
    else if (myData === 'Famille'){
      this.item = this.productService.getFamille().find(e => e.id === id);
    }
    else if (myData === 'Philosophie'){
      this.item = this.productService.getPhilosophie().find(e => e.id === id);
    }
    else if (myData === 'Developpementpersonnel'){
      this.item = this.productService.getDeveloppementpersonnel().find(e => e.id === id);
    }

  }
}
