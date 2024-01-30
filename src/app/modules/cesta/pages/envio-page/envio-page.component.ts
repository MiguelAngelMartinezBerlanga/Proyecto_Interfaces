
import { Component, Input, OnInit } from '@angular/core';
import { CestaService } from '../../services/cesta.service';

@Component({
    selector: 'cesta-envio-page',
    templateUrl: './envio-page.component.html',
})
export class EnvioPageComponent implements OnInit {

  place: string = '';

  postalCode: string = '';

  constructor(private cestaService : CestaService) {}

  ngOnInit(): void {
    this.cestaService.place$.subscribe(value => {
      this.place = value;
    })

    this.cestaService.postalCode$.subscribe(value => {
      this.postalCode = value;
    })
  }
}