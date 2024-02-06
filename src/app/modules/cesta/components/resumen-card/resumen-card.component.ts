import { Component, Input, OnInit } from '@angular/core';
import { CestaService } from '../../services/cesta.service';
import { SharedService } from 'src/app/shared/services/shared.service';
import { Producto } from 'src/app/shared/models/product';
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

  total: number = 0;

  emitValues() {
    this.cestaService.setCountry(this.selectedCountry)
    this.cestaService.setPostalCode(this.postalCode)
    this.cestaService.setPlace(this.place)
  }

  get subtotal(): number {
    return this.sharedService.subtotal
  }

  ngOnInit(): void {
    this.sharedService.calcularSubtotal()
  }
}