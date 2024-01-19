
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'cesta-products-page',
    templateUrl: './products-cesta-page.component.html',
    styles:  [`
      .enlace {
        text-decoration: none;
        }
    
      .enlace:hover {
        color: green;
      }
    `],
})
export class ProductsPageComponent implements OnInit {
  ngOnInit(): void {
    this.esta = 3;
  }
  
  public esta: number = 0; //Cambiar al tamaño de la lista de productos
}
