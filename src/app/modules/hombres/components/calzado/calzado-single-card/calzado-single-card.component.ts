import { Component, Input, OnInit } from '@angular/core';
import { RopaMujer } from '../../../models/ropa_mujer';
import { NgStyle, CurrencyPipe } from '@angular/common';

@Component({
    selector: '[calzado-single-card]',
    templateUrl: './calzado-single-card.component.html',
    standalone: true,
    imports: [NgStyle, CurrencyPipe],
})
export class CalzadoSingleCardComponent implements OnInit {
  @Input() calzado: RopaMujer = <RopaMujer>{};

  constructor() {}

  ngOnInit(): void {}
}
