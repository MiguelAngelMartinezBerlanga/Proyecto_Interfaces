import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { ProductoSingleCardComponent } from 'src/app/shared/components/product/product-single-card/product-single-card.component';
import { ProductoHeaderComponent } from 'src/app/shared/components/product/product-header/product-header.component';
import { Producto } from 'src/app/shared/models/product';


@Component({
    selector: 'app-sudaderas-mujer',
    templateUrl: './sudaderas.component.html',
    standalone: true,
    imports: [
      ProductoHeaderComponent,
      ProductoSingleCardComponent
      
  ],
})
export class SudaderasComponent {
  product: Array<Producto>;

  constructor() {
    this.product = [
      {
        id: 1,
        title: 'Sudadera Nike bicolor',
        price: 71.55,
        image: './assets/images/sudadera-gris-negra-nike.jpg',
        description : 'Para correr mas rápido',
      },
      {
        id: 2,
        title: 'Sudadera Nike rosa',
        price: 38.78,
        image: './assets/images/sudadera-nike-rosa.jpg',
        description : 'Para correr mas rápido',
      },
      {
        id: 3,
        title: 'Sudadera Puma rosa',
        price: 12.99,
        image: './assets/images/sudadera-rosa-mujer.jpg',
        description : 'Para correr mas rápido',
      },

      {
        id: 4,
        title: 'Sudadera Adidad top',
        price: 20.99,
        image: './assets/images/sudadera-top-adidas.jpg',
        description : 'Las llevo Jordan',
        
      },
      {
        id: 5,
        title: 'Sudadera Arsenal',
        price: 19.99,
        image: './assets/images/sudadera-arsenal.jpg',
        description : 'Para ir bien pretty',
        
      },
      {
        id: 6,
        title: 'Sudadera Nike sudadera',
        price: 45.77,
        image: './assets/images/sudadera-chaqueta-nike.jpg',
        description : 'Para ir bien pretty',
      },
      {
        id: 7,
        title: 'Sudadera Adidas morada',
        price: 45.78,
        image: './assets/images/sudadera-deportiva.jpg',
        description : 'Para ir bien pretty',
      },
      {
        id: 8,
        title: 'Sudadera Puma verde',
        price: 34.99,
        image: './assets/images/sudadera-verde-puma.jpg',
        description : 'Para ir bien pretty',
      },
    ];
  }

  ngOnInit(): void {}
}
