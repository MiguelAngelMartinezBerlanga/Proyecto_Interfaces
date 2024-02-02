import { Component, OnInit } from '@angular/core';
import { RopaMujer } from '../../models/ropa_mujer';
import { NftAuctionsTableComponent } from '../../components/sudaderas/nft-auctions-table/nft-auctions-table.component';
import { NftChartCardComponent } from '../../components/sudaderas/nft-chart-card/nft-chart-card.component';
import { NftSingleCardComponent } from '../../components/sudaderas/sudaderas-single-card/sudaderas-single-card.component';
import { NftDualCardComponent } from '../../components/sudaderas/nft-dual-card/nft-dual-card.component';
import { NftHeaderComponent } from '../../components/sudaderas/sudaderas-header/sudaderas-header.component';

@Component({
    selector: 'app-bañadores_bikinis',
    templateUrl: './bañadores_bikinis.component.html',
    standalone: true,
    imports: [
        NftHeaderComponent,
        NftDualCardComponent,
        NftSingleCardComponent,
        NftChartCardComponent,
        NftAuctionsTableComponent,
    ],
})
export class BañadoresBikinisComponent implements OnInit {
  ropa_mujer: Array<RopaMujer>;

  constructor() {
    this.ropa_mujer = [
      {
        id: 34356771,
        title: 'Girls of the Cartoon Universe',
        creator: 'Jhon Doe',
        instant_price: 4.2,
        price: 187.47,
        ending_in: '06h 52m 47s',
        last_bid: 0.12,
        image: './assets/images/img-01.jpg',
        avatar: './assets/avatars/avt-01.jpg',
      },
      {
        id: 34356772,
        title: 'Pupaks',
        price: 548.79,
        last_bid: 0.35,
        image: './assets/images/img-02.jpg',
      },
      {
        id: 34356773,
        title: 'Seeing Green collection',
        price: 234.88,
        last_bid: 0.15,
        image: './assets/images/img-03.jpg',
      },
    ];
  }

  ngOnInit(): void {}
}
