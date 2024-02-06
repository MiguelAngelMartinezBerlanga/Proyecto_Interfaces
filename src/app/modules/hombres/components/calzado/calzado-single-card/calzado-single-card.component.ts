import { Component, Input, OnInit } from '@angular/core';
import { RopaMujer } from '../../../models/ropa_mujer';
import { NgStyle, CurrencyPipe } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { SharedService } from 'src/app/shared/services/shared.service';
import { CestaService } from 'src/app/modules/cesta/services/cesta.service';

@Component({
    selector: '[calzado-single-card]',
    templateUrl: './calzado-single-card.component.html',
    standalone: true,
    imports: [NgStyle, CurrencyPipe, RouterModule],
})
export class CalzadoSingleCardComponent implements OnInit {
  @Input() calzado: RopaMujer = <RopaMujer>{};

  constructor(private router: Router, private cestaService: CestaService) {}

  ngOnInit(): void {}

  // click() {
  //   this.router.navigate(['/hombres/producto'])
  //   console.log(this.cestaService.productsCesta)
  // }
}
