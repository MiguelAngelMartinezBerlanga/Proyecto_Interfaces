import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'resumen-card',
    templateUrl: './resumen-card.component.html',
})
export class ResumenCardComponent implements OnInit {
  ngOnInit(): void {}
  
  selectedCountry: string = 'España';

  countries: string[] = ["Alemania", "Andorra", "España", "Francia", "Italia", "Portugal", "Reino Unido"];

  provincias : string[] = ["Albacete", "Alicante", "Almería"];
}