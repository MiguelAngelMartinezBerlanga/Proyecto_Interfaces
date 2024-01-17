import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'cesta-no-products-page',
    templateUrl: './no-products-page.component.html',
    styles:  [`
      .enlace {
        text-decoration: none;
        }
    
      .enlace:hover {
        color: green;
      }
    `],
})
export class NoProductsPageComponent implements OnInit {
  ngOnInit(): void {}
}
