import { Component, OnInit } from '@angular/core';
import { RopaMujer } from '../../models/ropa_mujer';
import { ProductoSingleCardComponent } from 'src/app/shared/components/product/product-single-card/product-single-card.component';
import { ProductoHeaderComponent } from 'src/app/shared/components/product/product-header/product-header.component';
import { Producto } from 'src/app/shared/models/product';

@Component({
    selector: 'app-camisetas-mujer',
    templateUrl: './camisetas.component.html',
    standalone: true,
    imports: [
      ProductoHeaderComponent,
      ProductoSingleCardComponent
      
  ]
})
export class CamisetasComponent implements OnInit {
  product: Array<Producto>;

  constructor() {
    this.product = [
      {
        id: 2,
        title: "Camiseta Adidas essentials",
        price: 40,
        image: "./assets/images/camiseta-adicolor-essentials.jpg",
        description: "¡Corre más rápido!"
      },
      {
        id: 1,
        title: "Camiseta Adidas",
        price: 10,
        image: "./assets/images/camiseta-adidad.jpg",
        description: "Camiseta para lucir elegante."
      },
      {
        id: 3,
        title: "Camiseta Adidas roja",
        price: 76.78,
        image: "./assets/images/camiseta-larga.jpg",
        description: "¡Corre más rápido!"
      },
      {
        id: 4,
        title: "Camiseta Nike oversize",
        price: 29.99,
        image: "./assets/images/camiseta-nike-over.jpg",
        description: "Jordan style."
      },
      {
        id: 5,
        title: "Camiseta Nike blanca",
        price: 47.34,
        image: "./assets/images/camiseta-nike.jpg",
        description: "Pretty chic."
      },
      {
        id: 6,
        title: "Adidas Puma negra",
        price: 45.99,
        image: "./assets/images/camiseta-puma-rayas.jpg",
        description: "Pretty cool."
      },
      {
        id: 7,
        title: "Camiseta Puma azul",
        price: 22.99,
        image: "./assets/images/camiseta-puma.jpg",
        description: "Pretty fresh."
      },
      {
        id: 8,
        title: "Crop Jordan",
        price: 13.99,
        image: "./assets/images/crop-jordan.jpg",
        description: "¡Corre más rápido!"
      }
      
    ];
  }

  ngOnInit(): void {}
}
