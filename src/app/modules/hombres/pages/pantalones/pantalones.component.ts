import { Component, OnInit } from '@angular/core';


import { ProductoHeaderComponent } from 'src/app/shared/components/product/product-header/product-header.component';
import { ProductoSingleCardComponent } from 'src/app/shared/components/product/product-single-card/product-single-card.component';
import { Producto } from 'src/app/shared/models/product';

@Component({
    selector: 'app-pantalones',
    templateUrl: './pantalones.component.html',
    standalone: true,
    imports: [
      ProductoHeaderComponent,
      ProductoSingleCardComponent
      
  ],
})
export class PantalonesComponent implements OnInit {
  product: Array<Producto>;

  constructor() {
    this.product = [
      {
        id: 12,
        title: "Pantalón Nike baggy azul",
        price: 100,
        image: "./assets/images/pantalones_anchos.jpg",
        description: "La camiseta del campeón"
      },
      {
        id: 13,
        title: "Pantalón Nike estrecho azul",
        price: 80,
        image: "./assets/images/pantalones_azules.jpg",
        description: "Camiseta retro selección Española del 1966"
      },
      {
        id: 14,
        title: "Pantalón Adidas ancho",
        price: 70.78,
        image: "./assets/images/pantalones_blancos.jpg",
        description: "Para que la gente se ría de ti"
      },
      {
        id: 15,
        title: "Pantalón Adidas cargo",
        price: 99.99,
        image: "./assets/images/pantalones_cargo.jpg",
        description: "El equipo que ayuda al FC Negreira"
      },
      {
        id: 16,
        title: "Pantalón Nike cian",
        price: 99.99,
        image: "./assets/images/pantalones_cyan.jpg",
        description: "La mejor camiseta para sentirte engañado. #LimGOHome"
      },
      {
        id: 17,
        title: "Pantalón Adidas gris",
        price: 110,
        image: "./assets/images/pantalones_grises.jpg",
        description: "Camiseta del grande de Italia"
      },
      {
        id: 18,
        title: "Pantalón Adidas marrón",
        price: 50.00,
        image: "./assets/images/pantalones_gucci.jpg",
        description: "La vergüenza de Madrid"
      },
      {
        id: 19,
        title: "Pantalón Jordan gris",
        price: 45,
        image: "./assets/images/pantalones_jordan.jpg",
        description: "El equipo que CR7 hizo grande"
      },
      {
        id: 20,
        title: "Pantalón Nike básico",
        price: 63.90,
        image: "./assets/images/pantalones_lisos.png",
        description: "El grande de Alemania"
      },
      {
        id: 21,
        title: "Pantalón Puma ancho",
        price: 99.99,
        image: "./assets/images/pantalones_marrones.jpg",
        description: "Una equipación muy bonita"
      },
      {
        id: 22,
        title: "Pantalón Nike morado",
        price: 94.67,
        image: "./assets/images/pantalones_morados.jpg",
        description: "La camiseta de un gran equipo"
      },
      {
        id: 23,
        title: "Pantalón Puma ancho",
        price: 86.98,
        image: "./assets/images/pantalones_puma.jpg",
        description: "El mejor equipo de Holanda"
      }
    ];
  }

  ngOnInit(): void {}
}
