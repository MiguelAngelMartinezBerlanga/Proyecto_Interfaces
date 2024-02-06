import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/product';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { CestaService } from 'src/app/modules/cesta/services/cesta.service';
import { RouterModule } from '@angular/router';
import { SharedService } from '../../services/shared.service';

@Component({
    selector: 'app-product-page',
    templateUrl: './product-page.component.html',
    standalone: true,
    imports: [
        FormsModule,
        CommonModule,
        NgIf,
        RouterModule
    ],
    styles: 
    [`img {
      max-width: 500px; 
    }`]
})
export class ProductPageComponent implements OnInit {
  
  cantidad: number = 1

  constructor(private sharedService: SharedService) {}

  get product(): Producto {
    return this.sharedService.producto;
  } 

  addToCesta() {
    this.product.cantidad = this.cantidad;
    this.sharedService.addProduct(this.product);
  }

  ngOnInit(): void {}
}