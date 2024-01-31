
import { Component, Input, OnInit } from '@angular/core';
import { CestaService } from '../../services/cesta.service';

@Component({
    selector: 'cesta-envio-page',
    templateUrl: './envio-page.component.html',
})
export class EnvioPageComponent implements OnInit {
  constructor(private cestaService : CestaService) {}

  place: string = '';

  postalCode: string = '';

  ngOnInit(): void {
    this.cestaService.place$.subscribe(value => {
      this.place = value;
    })

    this.cestaService.postalCode$.subscribe(value => {
      this.postalCode = value;
    })
  }

  email: string = '';

  name: string = '';

  surnames: string = '';

  street: string = '';

  house: string = '';

  city: string = '';

  phone: string = '';

  nie: string = '';
  
  emitValues() {
    this.cestaService.setEmail(this.email)
    this.cestaService.setName(this.name)
    this.cestaService.setSurnames(this.surnames)
    this.cestaService.setStreet(this.street)
    this.cestaService.setHouse(this.house)
    this.cestaService.setCity(this.city)
    this.cestaService.setPhone(this.phone)
    this.cestaService.setNie(this.nie)
  }
}