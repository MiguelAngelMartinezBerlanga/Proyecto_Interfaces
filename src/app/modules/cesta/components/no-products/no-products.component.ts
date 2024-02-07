import { Component, Input } from '@angular/core';

@Component({
  selector: 'no-products',
  templateUrl: './no-products.component.html',
  styles:  [`
      .enlace {
        text-decoration: none;
        }
    
      .enlace:hover {
        color: #ca8a04;
      }
    `],
})
export class NoProductsComponent {
}