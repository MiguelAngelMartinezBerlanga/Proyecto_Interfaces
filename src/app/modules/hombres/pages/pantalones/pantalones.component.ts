import { Component, OnInit } from '@angular/core';
import { RopaMujer } from '../../models/ropa_mujer';


import { PantalonesingleCardComponent } from '../../components/pantalones/pantalones-single-card/pantalones-single-card.component';
import { PantalonesHeaderComponent } from '../../components/pantalones/pantalones-header/pantalones-header.component';

@Component({
    selector: 'app-pantalones',
    templateUrl: './pantalones.component.html',
    standalone: true,
    imports: [
      PantalonesHeaderComponent,
        PantalonesingleCardComponent,
        
    ],
})
export class PantalonesComponent implements OnInit {
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
