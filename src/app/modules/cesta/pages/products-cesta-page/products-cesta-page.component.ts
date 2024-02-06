
import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/shared/models/product';
import { SharedService } from 'src/app/shared/services/shared.service';

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
    
  }

  constructor( private sharedService: SharedService) {}

  get productsCesta(): Producto[] {
    return this.sharedService.productsCesta;
  } 
}
