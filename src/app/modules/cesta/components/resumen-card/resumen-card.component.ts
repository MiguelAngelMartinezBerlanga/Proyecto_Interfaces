import { Component, Input, OnInit } from '@angular/core';
import { CestaService } from '../../services/cesta.service';
@Component({
    selector: 'resumen-card',
    templateUrl: './resumen-card.component.html',
})
export class ResumenCardComponent implements OnInit {
  ngOnInit(): void {}

  constructor(private cestaService: CestaService) {}
  
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
}