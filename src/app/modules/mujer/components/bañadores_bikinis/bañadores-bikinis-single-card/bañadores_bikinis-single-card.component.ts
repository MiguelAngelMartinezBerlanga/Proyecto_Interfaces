import { Component, Input, OnInit } from '@angular/core';
import { RopaMujer } from '../../../models/ropa_mujer';
import { NgStyle, CurrencyPipe } from '@angular/common';

@Component({
    selector: '[bañadores_bikinis-single-card]',
    templateUrl: './bañadores_bikinis-single-card.component.html',
    standalone: true,
    imports: [NgStyle, CurrencyPipe],
})
export class BañadoresBikinisSingleCardComponent implements OnInit {
  @Input() nft: RopaMujer = <RopaMujer>{};


  constructor() {}

  ngOnInit(): void {}
}
