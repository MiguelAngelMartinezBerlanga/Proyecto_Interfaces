import { Component, Input, OnInit } from '@angular/core';
import { RopaMujer } from '../../../models/ropa_mujer';
import { NgStyle, CurrencyPipe } from '@angular/common';

@Component({
    selector: '[chaquetas-single-card]',
    templateUrl: './chaquetas-single-card.component.html',
    standalone: true,
    imports: [NgStyle, CurrencyPipe],
})
export class ChaquetasSingleCardComponent implements OnInit {
  @Input() nft: RopaMujer = <RopaMujer>{};

  constructor() {}

  ngOnInit(): void {}
}
