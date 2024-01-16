import { Component, Input, OnInit } from '@angular/core';
import { RopaMujer } from '../../../models/ropa_mujer';
import { NgStyle, CurrencyPipe } from '@angular/common';

@Component({
    selector: '[nft-dual-card]',
    templateUrl: './nft-dual-card.component.html',
    standalone: true,
    imports: [NgStyle, CurrencyPipe],
})
export class NftDualCardComponent implements OnInit {
  @Input() nft: RopaMujer = <RopaMujer>{};

  constructor() {}

  ngOnInit(): void {}
}
