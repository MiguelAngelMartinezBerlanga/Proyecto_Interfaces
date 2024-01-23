import { Component, OnInit } from '@angular/core';
import { RopaMujer } from '../../models/ropa_mujer';


import { ChaquetasSingleCardComponent } from '../../components/chaquetas/chaquetas-single-card/chaquetas-single-card.component';
import { ChaquetasHeaderComponent } from '../../components/chaquetas/chaquetas-header/chaquetas-header.component';

@Component({
    selector: 'app-chaquetas',
    templateUrl: './chaquetas.component.html',
    standalone: true,
    imports: [
      ChaquetasHeaderComponent,
      ChaquetasSingleCardComponent,
        
    ],
})
export class ChaquetasComponent implements OnInit {
  calzado: Array<RopaMujer>;

  constructor() {
    this.calzado = [
      {
        id: 34356771,
        title: 'Girls of the Cartoon Universe',
        creator: 'Jhon Doe',
        instant_price: 4.2,
        price: 187.47,
        ending_in: '06h 52m 47s',
        last_bid: 0.12,
        image: './assets/images/img-01.jpg',
        avatar: './assets/avatars/avt-01.jpg',
      },
      {
        id: 1,
        title: 'Nike Panda',
        price: 120,
        image: './assets/images/pandaGris.png',
      },
      {
        id: 34356773,
        title: 'Seeing Green collection',
        price: 234.88,
        last_bid: 0.15,
        image: './assets/images/img-03.jpg',
      },
    ];
  }

  ngOnInit(): void {}
}
