import { Component, Input, OnInit } from '@angular/core';
import { NgStyle, CurrencyPipe } from '@angular/common';
import { RopaMujer } from '../../../models/ropa_mujer';

@Component({
    selector: '[pantalones-single-card]',
    templateUrl: './pantalones-single-card.component.html',
    standalone: true,
    imports: [NgStyle, CurrencyPipe],
})
export class PantalonesSingleCardComponent implements OnInit {
  @Input() nft: RopaMujer = <RopaMujer>{};

  constructor() {}

  ngOnInit(): void {}
}
