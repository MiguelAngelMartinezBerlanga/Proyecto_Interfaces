import { Component, OnInit } from '@angular/core';
import { Calzado } from '../../models/calzado';


import { CalzadoSingleCardComponent } from '../../components/calzado/calzado-single-card/calzado-single-card.component';
import { CalzadoHeaderComponent } from '../../components/calzado/calzado-header/calzado-header.component';

@Component({
    selector: 'app-calzado',
    templateUrl: './calzado.component.html',
    standalone: true,
    imports: [
        CalzadoHeaderComponent,
        CalzadoSingleCardComponent,
        
    ],
})
export class CalzadoComponent implements OnInit {
  calzado: Array<Calzado>;

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
