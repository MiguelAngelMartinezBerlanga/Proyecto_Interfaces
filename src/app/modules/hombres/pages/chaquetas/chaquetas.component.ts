import { Component, OnInit } from '@angular/core';
import { ProductoSingleCardComponent } from 'src/app/shared/components/product/product-single-card/product-single-card.component';
import { ProductoHeaderComponent } from 'src/app/shared/components/product/product-header/product-header.component';
import { Producto } from 'src/app/shared/models/product';

@Component({
    selector: 'app-chaquetas',
    templateUrl: './chaquetas.component.html',
    standalone: true,
    imports: [
      ProductoHeaderComponent,
      ProductoSingleCardComponent
      
  ],
})
export class ChaquetasComponent implements OnInit {
  product: Array<Producto>;

  constructor() {
    this.product = [
      {
        id: 12,
        title: 'Chaqueta Veige Nike',
        price: 100,
        image: './assets/images/chaqueta_blanca.jpg',
        description : 'La camiseta del campeon',
      },
      {
        id: 13,
        title: 'Chaqueta Nike negra',
        price: 80,
        image: './assets/images/chaqueta_nike.jpg',
        description : 'Camiseta retro selección Española del 1966',
      },
      {
        id: 14,
        title: 'Chaqueta Adidas negra',
        price: 70.78,
        image: './assets/images/chaqueta_negra.jpg',
        description : 'Para que la gente se ria de ti',
      },

      {
        id: 15,
        title: 'Chaqueta del Real Madrid',
        price: 99.99,
        image: './assets/images/chaqueta_real.jpg',
        description : 'El equipo que ayuda al FC Negreira',
        
      },
      {
        id:16,
        title: 'Chaqueta Nike roja',
        price: 99.99,
        image: './assets/images/chaqueta_roja.jpg',
        description : 'La mejor camiseta para sentirte engañado. #LimGOHome',
        
      },
      {
        id: 17,
        title: 'Chaqueta Puma con borrego',
        price: 110,
        image: './assets/images/chaqueta_borrego.jpg',
        description : 'Camiseta del grande de italia',
      },
      {
        id: 18,
        title: 'Chaqueta Adidas Marrón',
        price: 50.00,
        image: './assets/images/chaqueta_marron.jpg',
        description : 'La vergüenza de madrid',
      },
      {
        id: 19,
        title: 'Chaqueta Puma',
        price: 45,
        image: './assets/images/chaqueta_puma.jpg',
        description : 'El equipo que CR7 hizo grande',

      },

      {
        id: 20,
        title: 'Chaqueta Adidas Verde',
        price: 63.90,
        image: './assets/images/chaqueta_verde.jpg',
        description : 'El grande de Alemania',
      },

      {
        id: 21,
        title: 'Chaqueta Nike marron y blanca',
        price: 99.99,
        image: './assets/images/chaqueta_blanca_marron.jpg',
        description : 'Una equipación muy bonita',
      },
      {
        id: 22,
        title: 'Chaqueta Jordan Verde',
        price: 94.67,
        image: './assets/images/chaqueta_jordan.jpg',
        description : 'La camiseta de un gran equipo',
      },
      {
        id: 23,
        title: 'Chaqueta Puma x Dapper ',
        price: 86.98,
        image: './assets/images/chaqueta_moderna.jpg',
        description : 'El mejor equipo de Holanda',
      },
    ];
  }

  ngOnInit(): void {}
}
