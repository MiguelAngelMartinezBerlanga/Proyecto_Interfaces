import { Component, Input } from '@angular/core';
import { Producto } from 'src/app/shared/models/product';

@Component({
  selector: 'product-table',
  templateUrl: './product-table.component.html',
  styleUrls: [
    './product-table.component.css'
  ]
})
export class ProductTableComponent {
  // @Input()
  // public products: Producto [] = [];
  products: Producto [] = [];

  constructor() {
    this.products = [
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
}
