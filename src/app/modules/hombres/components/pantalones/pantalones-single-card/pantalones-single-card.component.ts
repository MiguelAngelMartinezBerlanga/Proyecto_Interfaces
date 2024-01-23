import { Component, Input, OnInit } from '@angular/core';
import { Calzado } from '../../../models/calzado';
import { NgStyle, CurrencyPipe } from '@angular/common';

@Component({
    selector: '[pantalones-single-card]',
    templateUrl: './pantalones-single-card.component.html',
    standalone: true,
    imports: [NgStyle, CurrencyPipe],
})
export class PantalonesingleCardComponent implements OnInit {
  @Input() calzado: Calzado = <Calzado>{};

  constructor() {}

  ngOnInit(): void {}
}
