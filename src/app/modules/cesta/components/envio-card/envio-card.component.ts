import { Component, Input } from '@angular/core';
import { CestaService } from '../../services/cesta.service';

@Component({
  selector: 'envio-card',
  templateUrl: './envio-card.component.html',
})
export class EnvioCardComponent {
    constructor(private cestaService: CestaService){}

    country: String = '';
    city: String = '';
    street: String = '';
    house: String = '';
    postalCode: String = '';
    name: String = '';
    surnames: String = '';
    nie: String = '';
    email: String = '';
    phone: String = '';
    total: String = '';

    ngOnInit(): void {
        this.cestaService.country$.subscribe(value => {
            this.country = value;
        })

        this.cestaService.city$.subscribe(value => {
            this.city = value;
        })

        this.cestaService.street$.subscribe(value => {
          this.street = value;
        })
    
        this.cestaService.postalCode$.subscribe(value => {
          this.postalCode = value;
        })

        this.cestaService.house$.subscribe(value => {
            this.house = value;
        })

        this.cestaService.name$.subscribe(value => {
            this.name = value;
        })

        this.cestaService.surnames$.subscribe(value => {
            this.surnames = value;
        })

        this.cestaService.email$.subscribe(value => {
            this.email = value;
        })

        this.cestaService.nie$.subscribe(value => {
            this.nie = value;
        })

        this.cestaService.phone$.subscribe(value => {
            this.phone = value;
        })
      }
}