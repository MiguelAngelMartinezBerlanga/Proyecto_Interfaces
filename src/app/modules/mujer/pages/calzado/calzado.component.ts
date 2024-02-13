import { Component, OnInit } from '@angular/core';
import { RopaMujer } from '../../models/ropa_mujer';
import { ProductoSingleCardComponent } from 'src/app/shared/components/product/product-single-card/product-single-card.component';
import { ProductoHeaderComponent } from 'src/app/shared/components/product/product-header/product-header.component';
import { Producto } from 'src/app/shared/models/product';

@Component({
    selector: 'app-calzado-mujer',
    templateUrl: './calzado.component.html',
    standalone: true,
    imports: [
      ProductoHeaderComponent,
      ProductoSingleCardComponent
      
  ]
})
export class CalzadoComponent implements OnInit {
  product: Array<Producto>;

  constructor() {
    this.product = [
      {
        id: 2,
        title: 'Adidas Ozmillen',
        price: 35,
        image: './assets/images/adidas-ozmillen.jpg',
        description : 'Para correr mas rápido',
      },
      {
        id: 1,
        title: 'Nike Panda',
        price: 30,
        image: './assets/images/pandaGris.png',
        description : 'Para correr mas rápido',
      },
      {
        id: 3,
        title: 'Pumas Palermo',
        price: 150,
        image: './assets/images/Zapatillas-Palermo-Lth-unisex.jpg',
        description : 'Para correr mas rápido',
      },

      {
        id: 4,
        title: 'Nike Air Jordan 1 Mid',
        price: 1000.000000,
        image: './assets/images/air-jordan-1-mid-se-sabatilles-home-bcVdbQ.jpg',
        description : 'Las llevo Jordan',
        
      },
      {
        id: 5,
        title: 'Nike Air Max 90',
        price: 170,
        image: './assets/images/air-max.jpg',
        description : 'Para ir bien pretty',
        
      },
      {
        id: 6,
        title: 'Adidas Super Star',
        price: 99,
        image: './assets/images/Superstar_Blanco.jpg',
        description : 'Para ir bien pretty',
      },
      {
        id: 7,
        title: 'Adidas Forum Low',
        price: 120,
        image: './assets/images/Zapatilla_Forum.jpg',
        description : 'Para ir bien pretty',
      },
      {
        id: 8,
        title: 'Pumas SlipStream',
        price: 100,
        image: './assets/images/Zapatillas-Slipstream.jpg',
        description : 'Para correr mas rápido',

      },

      {
        id: 9,
        title: 'Adidas Owego',
        price: 63.90,
        image: './assets/images/owego.jpg',
        description : 'Para llevarte a las pivitas',
      },

      {
        id: 10,
        title: 'Adidas Gazzelle',
        price: 99.99,
        image: './assets/images/gazzelle.jpg',
        description : 'Para correr mas rápido',
      },
      {
        id: 11,
        title: 'Puma Pantuflas',
        price: 50,
        image: './assets/images/pantuflas.jpg',
        description : 'Zapatillones',
      },
      {
        id: 12,
        title: 'Adidas adi2000',
        price: 120,
        image: './assets/images/adi.jpg',
        description : 'Bien bacanas',
      },
    ];
  }

  ngOnInit(): void {}
}
