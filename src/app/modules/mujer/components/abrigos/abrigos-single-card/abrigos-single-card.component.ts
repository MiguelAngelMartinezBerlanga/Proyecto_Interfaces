import { Component, Input, OnInit } from '@angular/core';
import { RopaMujer } from '../../../models/ropa_mujer';
import { NgStyle, CurrencyPipe } from '@angular/common';

@Component({
    selector: '[abrigos-single-card]',
    templateUrl: './abrigos-single-card.component.html',
    standalone: true,
    imports: [NgStyle, CurrencyPipe],
})
export class AbrigosSingleCardComponent implements OnInit {
  @Input() nft: RopaMujer = <RopaMujer>{};


  constructor() {}

  ngOnInit(): void {}
}
