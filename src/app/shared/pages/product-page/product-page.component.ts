import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/product';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-product-page',
    templateUrl: './product-page.component.html',
    standalone: true,
    imports: [
        FormsModule
    ]
})
export class ProductPageComponent implements OnInit {
  public product: Producto;
  
  cantidad: number = 1

  constructor() {
    this.product = {
        id: 1,
        title: 'Nike Panda',
        price: 120,
        image: './assets/images/pandaGris.png',
      }
  }

  ngOnInit(): void {}
}