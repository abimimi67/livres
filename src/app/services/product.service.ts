import { Injectable } from '@angular/core';
import { Iproduct } from '../interfaces/iProduct';
import {PHILOSOPHIE} from '../data/philosophie';
import {DEVELOPPEMENTPERSONNEL} from '../data/developpement-personnel';
import {FAMILLE} from '../data/famille';
import {ENFANTS} from '../data/enfants';
import {HUMOUR} from '../data/humour';
import {RELIGION} from '../data/religion';
import {ROMANCE} from '../data/romance';
import {ROMANSPOLICIERS} from '../data/romans-policiers';

@Injectable({
  providedIn: 'root'
})

export class ProductService{
  myData: any

 getPhilosophie(): Iproduct[] { return PHILOSOPHIE;}

 getDeveloppementpersonnel(): Iproduct[] { return DEVELOPPEMENTPERSONNEL;}

 getFamille(): Iproduct[] { return FAMILLE;}

 getEnfants(): Iproduct[] { return ENFANTS;}

 getHumour(): Iproduct[] { return HUMOUR;}

 getReligion(): Iproduct[] { return (RELIGION);}


 getRomance(): Iproduct[] { return ROMANCE;}

 getRomanspoliciers(): Iproduct[] { return ROMANSPOLICIERS;}

  constructor() {}

}
