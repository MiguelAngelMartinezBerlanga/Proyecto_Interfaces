import { Component, OnInit } from '@angular/core';
import { RopaMujer } from '../../models/ropa_mujer';
import { ProductoSingleCardComponent } from 'src/app/shared/components/product/product-single-card/product-single-card.component';
import { ProductoHeaderComponent } from 'src/app/shared/components/product/product-header/product-header.component';
import { Producto } from 'src/app/shared/models/product';

@Component({
    selector: 'app-chaquetas-mujer',
    templateUrl: './chaquetas.component.html',
    standalone: true,
    imports: [
      ProductoHeaderComponent,
      ProductoSingleCardComponent
      
  ]
})
export class ChaquetasComponent implements OnInit {
  product: Array<Producto>;

  constructor() {
    this.product = [
      {
        id: 1,
        title: 'Chaqueta Adidas larga',
        price: 12.55,
        image: './assets/images/mujer-chaqueta-adidas.jpg',
        description : 'Para correr mas rápido',
      },
      {
        id: 2,
        title: 'Chaqueta Nike Blanca',
        price: 72.4,
        image: './assets/images/mujer-chaqueta-blanca.jpg',
        description : 'Para correr mas rápido',
      },
      {
        id: 3,
        title: 'Chaqueta Nike negra',
        price: 14.45,
        image: './assets/images/mujer-chaqueta-negra.jpg',
        description : 'Para correr mas rápido',
      },

      {
        id: 4,
        title: 'Chaqueta Nike acolchada',
        price: 31.59,
        image: './assets/images/mujer-chaqueta-nike-acolchada.jpg',
        description : 'Las llevo Jordan',
        
      },
      {
        id: 5,
        title: 'Chaqueta Nike con estampado',
        price: 16.55,
        image: './assets/images/mujer-chaqueta-nike.jpg',
        description : 'Para ir bien pretty',
        
      },
      {
        id: 6,
        title: 'Chaqueta Puma marrón',
        price: 23.67,
        image: './assets/images/mujer-chaqueta-puma-marron.jpg',
        description : 'Para ir bien pretty',
      },
      {
        id: 7,
        title: 'Chaqueta Puma naranja',
        price: 39,
        image: './assets/images/mujer-chaqueta-puma.jpg',
        description : 'Para ir bien pretty',
      },
      {
        id: 8,
        title: 'Chaqueta Puma negra',
        price: 64,
        image: './assets/images/mujer-chaqueta-puma-negra.jpg',
        description : 'Para ir bien pretty',
      },
    ];
  }

  ngOnInit(): void {}
}
