import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
    selector: 'cesta-pago-page',
    templateUrl: './pago-page.component.html',
})
export class PagoPageComponent implements OnInit {
  ngOnInit(): void {}

  constructor(private sharedService: SharedService){}

  clearList() {
    this.sharedService.clearProducts();
  }
}