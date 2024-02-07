import { Component, Input, OnInit } from '@angular/core';

import { CestaService } from '../../services/cesta.service';
import { SharedService } from 'src/app/shared/services/shared.service';
@Component({
    selector: 'resumen-card',
    templateUrl: './resumen-card.component.html',
})
export class ResumenCardComponent implements OnInit {

  constructor(private cestaService: CestaService, private sharedService: SharedService) {}
  
  selectedCountry: string = '';

  countries: string[] = ["Alemania", "Andorra", "España", "Francia", "Italia", "Portugal", "Reino Unido"];

  provincias : string[] = ["Albacete", "Alicante", "Almería", "Barcelona", "Madrid", "Valencia"];

  postalCode: string = '';

  place: string = '';

  emitValues() {
    this.cestaService.setCountry(this.selectedCountry)
    this.cestaService.setPostalCode(this.postalCode)
    this.cestaService.setPlace(this.place)
  }

  get subtotal(): number {
    return this.sharedService.subtotal
  }

  get total(): number {
    return this.sharedService.total
  }

  get impuestos(): number {
    return this.sharedService.impuestos
  }

  ngOnInit(): void {
    this.sharedService.calcularSubtotal()
    this.sharedService.calcularTotal()
  }
}