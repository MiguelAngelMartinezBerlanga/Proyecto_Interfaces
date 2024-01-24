import { Component, Input, OnInit } from '@angular/core';
import { RopaMujer } from '../../../models/ropa_mujer';
import { NgStyle, CurrencyPipe } from '@angular/common';

@Component({
    selector: '[pantalones-single-card]',
    templateUrl: './pantalones-single-card.component.html',
    standalone: true,
    imports: [NgStyle, CurrencyPipe],
})
export class PantalonesingleCardComponent implements OnInit {
  @Input() calzado: RopaMujer = <RopaMujer>{};

  constructor() {}

  ngOnInit(): void {}
}
