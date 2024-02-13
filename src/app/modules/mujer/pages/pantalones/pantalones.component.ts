import { Component, OnInit } from '@angular/core';
import { ProductoSingleCardComponent } from 'src/app/shared/components/product/product-single-card/product-single-card.component';
import { ProductoHeaderComponent } from 'src/app/shared/components/product/product-header/product-header.component';
import { Producto } from 'src/app/shared/models/product';

@Component({
    selector: 'app-pantalones-mujer',
    templateUrl: './pantalones.component.html',
    standalone: true,
    imports: [
      ProductoHeaderComponent,
      ProductoSingleCardComponent
      
  ]
})
export class PantalonesComponent implements OnInit {
  product: Array<Producto>;

  constructor() {
    this.product = [
      {
        id: 2,
        title: "Mallas Puma bicolor",
        price: 23,
        image: "./assets/images/mallas-azules.jpg",
        description: "¡Corre más rápido!"
      },
      {
        id: 1,
        title: "Mallas Nike beige",
        price: 43.56,
        image: "./assets/images/mallas-grises.jpg",
        description: "Camiseta para lucir elegante."
      },
      {
        id: 3,
        title: "CMallas Adidas shine",
        price: 24.88,
        image: "./assets/images/mallas-shine.jpg",
        description: "¡Corre más rápido!"
      },
      {
        id: 4,
        title: "Mallas Nike pro azules",
        price: 10,
        image: "./assets/images/mallas-nikepro.jpg",
        description: "Jordan style."
      },
      {
        id: 5,
        title: "Mallas Adidas rosas",
        price: 170,
        image: "./assets/images/mallas-rosas-puma.jpg",
        description: "Pretty chic."
      },
      {
        id: 6,
        title: "Mallas Adidas anchas",
        price: 89,
        image: "./assets/images/mallas-anchas.jpg",
        description: "Pretty cool."
      },
      {
        id: 7,
        title: "Mallas Adidas naranjas",
        price: 20,
        image: "./assets/images/mallas-naranjas.jpg",
        description: "Pretty fresh."
      },
      {
        id: 8,
        title: "Mallas Nike pro negras",
        price: 19.99,
        image: "./assets/images/nike-pro-negras.jpg",
        description: "¡Corre más rápido!"
      }
      
    ];
  }

  ngOnInit(): void {}
}
