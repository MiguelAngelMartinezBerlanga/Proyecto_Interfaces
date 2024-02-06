import { Component, Input } from '@angular/core';
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
}
