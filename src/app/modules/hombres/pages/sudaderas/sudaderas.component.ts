import { Component, OnInit } from '@angular/core';

import { ProductoHeaderComponent } from 'src/app/shared/components/product/product-header/product-header.component';
import { ProductoSingleCardComponent } from 'src/app/shared/components/product/product-single-card/product-single-card.component';
import { Producto } from 'src/app/shared/models/product';

@Component({
    selector: 'app-sudaderas',
    templateUrl: './sudaderas.component.html',
    standalone: true,
    imports: [
      ProductoHeaderComponent,
      ProductoSingleCardComponent
      
  ],
})
export class SudaderasComponent implements OnInit {
  product: Array<Producto>;

  constructor() {
    this.product = [
      {
        id: 12,
        title: "Sudadera Puma con cremallera",
        price: 200,
        image: "./assets/images/sudadera-capucha.jpg",
        description: "La camiseta del campeón"
      },
      {
        id: 13,
        title: "Sudadera F1",
        price: 80,
        image: "./assets/images/sudadera-f1.jpg",
        description: "Camiseta retro selección Española del 1966"
      },
      {
        id: 14,
        title: "Sudadera Nike gris",
        price: 78.78,
        image: "./assets/images/sudadera-gris-nike.jpg",
        description: "Para que la gente se ría de ti"
      },
      {
        id: 15,
        title: "Sudadera Adidas gris",
        price: 99.99,
        image: "./assets/images/sudadera-gris.jpg",
        description: "El equipo que ayuda al FC Negreira"
      },
      {
        id: 16,
        title: "Sudadera Jordan roja",
        price: 45.99,
        image: "./assets/images/sudadera-jordan.jpg",
        description: "La mejor camiseta para sentirte engañado. #LimGOHome"
      },
      {
        id: 17,
        title: "Sudadera Nike liverpool",
        price: 10,
        image: "./assets/images/sudadera-liverpool.jpg",
        description: "Camiseta del grande de Italia"
      },
      {
        id: 18,
        title: "Sudadera Puma multicolor",
        price: 50.00,
        image: "./assets/images/sudadera-mercedes.jpg",
        description: "La vergüenza de Madrid"
      },
      {
        id: 19,
        title: "Sudadera Nike negra",
        price: 23,
        image: "./assets/images/sudadera-negra.jpg",
        description: "El equipo que CR7 hizo grande"
      },
      {
        id: 20,
        title: "Sudadera Adidas rosa",
        price: 63.90,
        image: "./assets/images/sudadera-rosa.jpg",
        description: "El grande de Alemania"
      },
      {
        id: 21,
        title: "Sudadera Adidad Beige",
        price: 45.47,
        image: "./assets/images/sudadera-veige.jpg",
        description: "Una equipación muy bonita"
      },
      {
        id: 22,
        title: "Sudadera Adidas verde",
        price: 34.67,
        image: "./assets/images/sudadera-verde.jpg",
        description: "La camiseta de un gran equipo"
      },
      {
        id: 23,
        title: "Sudadera Adidas roja",
        price: 98.98,
        image: "./assets/images/sudadera-roja-negra.jpg",
        description: "El mejor equipo de Holanda"
      }
    ];
  }

  ngOnInit(): void {}
}
