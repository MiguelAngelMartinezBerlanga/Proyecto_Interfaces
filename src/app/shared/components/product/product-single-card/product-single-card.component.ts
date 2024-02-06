import { Component, Input, OnInit } from '@angular/core';
import { NgStyle, CurrencyPipe } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Producto } from 'src/app/shared/models/product';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
    selector: '[product-single-card]',
    templateUrl: './product-single-card.component.html',
    standalone: true,
    imports: [NgStyle, CurrencyPipe, RouterModule],
})
export class ProductoSingleCardComponent implements OnInit {
  @Input() producto: Producto = <Producto>{};

  constructor(private router: Router, private sharedService: SharedService) {}

  ngOnInit(): void {}

  click() {
    this.router.navigate(['/hombres/producto'])
    this.sharedService.setProducto(this.producto)
  }
}