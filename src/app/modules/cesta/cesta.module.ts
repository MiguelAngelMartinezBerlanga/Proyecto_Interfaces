import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { CestaRoutingModule } from './cesta-routing.module';
import { CestaService } from './services/cesta.service';

import { EnvioPageComponent } from './pages/envio-page/envio-page.component';
import { PagoPageComponent } from './pages/pago-page/pago-page.component';
import { ProductsPageComponent } from './pages/products-cesta-page/products-cesta-page.component';

import { EnvioCardComponent } from './components/envio-card/envio-card.component';
import { NoProductsComponent } from './components/no-products/no-products.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { ResumenCardComponent } from './components/resumen-card/resumen-card.component';


@NgModule({
    declarations: [
        EnvioPageComponent,
        PagoPageComponent,
        ProductsPageComponent,

        EnvioCardComponent,
        NoProductsComponent,
        ProductTableComponent,
        ResumenCardComponent,
    ],

  imports: [
    CestaRoutingModule,
    CommonModule,
    FormsModule
    ],
    providers: [
      CestaService
    ]
})
export class CestaModule {}
