import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
    selector: 'cesta-pago-page',
    templateUrl: './pago-page.component.html',
    styles:  [`
      .enlace {
        text-decoration: none;
        }
    
      .enlace:hover {
        color: #ca8a04;
      }
    `],
})
export class PagoPageComponent implements OnInit {
  constructor(private sharedService: SharedService){}

  realizada = false

  clearList() {
    this.sharedService.clearProducts();
    this.realizada = false;
  }

  compraRealizada() {
    this.realizada = true;
  }

  ngOnInit(): void {}
}