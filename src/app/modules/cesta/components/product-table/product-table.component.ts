import { Component, Input } from '@angular/core';

import { SharedService } from 'src/app/shared/services/shared.service';

import { Producto } from 'src/app/shared/models/product';

@Component({
  selector: 'product-table',
  templateUrl: './product-table.component.html',
  styleUrls: [
    './product-table.component.css'
  ]
})
export class ProductTableComponent {
  @Input()
  public productsCesta: Producto [] = [];

  constructor(private sharedService: SharedService){}

  deleteProduct(index: number) {
    this.sharedService.deleteProducto(index);
  }
}
