import { Component, OnInit } from '@angular/core';


import { Producto } from 'src/app/shared/models/product';
import { ProductoHeaderComponent } from 'src/app/shared/components/product/product-header/product-header.component';
import { ProductoSingleCardComponent } from 'src/app/shared/components/product/product-single-card/product-single-card.component';
@Component({
    selector: 'app-camisetas',
    templateUrl: './camisetas.component.html',
    standalone: true,
    imports: [
      ProductoHeaderComponent,
      ProductoSingleCardComponent,
        
    ],
})
export class CamisetasComponent implements OnInit {
  product: Array<Producto>;

  constructor() {
    this.product = [
      {
        id: 12,
        title: 'Tercera equipación Real Madrid',
        price: 100,
        image: './assets/images/cami_real.jpg',
        description : 'La camiseta del campeon',
      },
      {
        id: 13,
        title: 'Equipación Selección Española',
        price: 80,
        image: './assets/images/cami_spain.jpg',
        description : 'Camiseta retro selección Española del 1966',
      },
      {
        id: 14,
        title: 'Equipación FC Negreira',
        price: 0.99,
        image: './assets/images/cami_negreira.jpg',
        description : 'Para que la gente se ria de ti',
      },

      {
        id: 15,
        title: 'Equipación del 12 FC Negreira',
        price: 99.99,
        image: './assets/images/cami_arbi.jpg',
        description : 'El jugador que marca la diferencia',
        
      },
      {
        id:16,
        title: 'Equipación Valencia',
        price: 79.99,
        image: './assets/images/cami_valen.jpg',
        description : 'La mejor camiseta para sentirte engañado. #LimGOHome',
        
      },
      {
        id: 17,
        title: 'Equipación Milan',
        price: 110,
        image: './assets/images/cami_milan.jpg',
        description : 'Camiseta del grande de italia',
      },
      {
        id: 18,
        title: 'Equipación Patético de Madrid',
        price: 0.1,
        image: './assets/images/cami_patetic.jpg',
        description : 'La vergüenza de madrid',
      },
      {
        id: 19,
        title: 'Equipación Manchester United',
        price: 45,
        image: './assets/images/cami_united.jpg',
        description : 'El equipo que CR7 hizo grande',

      },

      {
        id: 20,
        title: 'Segunda equipación FC Bayern',
        price: 63.90,
        image: './assets/images/cami_bayern.jpg',
        description : 'El grande de Alemania',
      },

      {
        id: 21,
        title: 'Equipación Roma',
        price: 99.99,
        image: './assets/images/cami_roma.jpg',
        description : 'Una equipación muy bonita',
      },
      {
        id: 22,
        title: 'Equipación Liverpool',
        price: 94.67,
        image: './assets/images/cami_liver.jpg',
        description : 'La camiseta de un gran equipo',
      },
      {
        id: 23,
        title: 'Equipación Ajax',
        price: 86.98,
        image: './assets/images/cami_ajax.jpg',
        description : 'El mejor equipo de Holanda',
      },

    ];
  }

  ngOnInit(): void {}
}
