import { Component, Input, OnInit } from '@angular/core';
import { Calzado } from '../../../models/calzado';
import { NgStyle, CurrencyPipe } from '@angular/common';

@Component({
    selector: '[chaquetas-single-card]',
    templateUrl: './chaquetas-single-card.component.html',
    standalone: true,
    imports: [NgStyle, CurrencyPipe],
})
export class ChaquetasSingleCardComponent implements OnInit {
  @Input() calzado: Calzado = <Calzado>{};

  constructor() {}

  ngOnInit(): void {}
}
