import { Component, Input, OnInit } from '@angular/core';
import { Calzado } from '../../../models/calzado';
import { NgStyle, CurrencyPipe } from '@angular/common';

@Component({
    selector: '[camisetas-single-card]',
    templateUrl: './camisetas-single-card.component.html',
    standalone: true,
    imports: [NgStyle, CurrencyPipe],
})
export class CamisetasSingleCardComponent implements OnInit {
  @Input() calzado: Calzado = <Calzado>{};

  constructor() {}

  ngOnInit(): void {}
}
