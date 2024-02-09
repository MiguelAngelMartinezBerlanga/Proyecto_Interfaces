import { Component, Input, OnInit } from '@angular/core';

import { SharedService } from 'src/app/shared/services/shared.service';

import { Producto } from 'src/app/shared/models/product';

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

  metodoPago = ''

  realizada = false

  mostrarMensaje = false

  clearList() {
    if(this.realizada) {
      this.sharedService.clearProducts();
      this.realizada = false;
    } 
  }

  compraRealizada() {
    if(this.metodoPago != '') {
      this.realizada = true;
    } else {
      this.mostrarMensaje = true;
    }
  }

  get productsCesta(): Producto[] {
    return this.sharedService.productsCesta;
  } 

  ngOnInit(): void {}
}