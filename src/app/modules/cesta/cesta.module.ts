import { NgModule } from '@angular/core';

import { CestaRoutingModule } from './cesta-routing.module';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { ProductsPageComponent } from './pages/products-cesta-page/products-cesta-page.component';
import { ResumenCardComponent } from './components/resumen-card/resumen-card.component';
import { CommonModule } from '@angular/common';
import { EnvioPageComponent } from './pages/envio-page/envio-page.component';
import { PagoPageComponent } from './pages/pago-page/pago-page.component';

@NgModule({
    declarations: [
        EnvioPageComponent,
        PagoPageComponent,
        ProductsPageComponent,
        ProductTableComponent,
        ResumenCardComponent,
    ],

  imports: [
    CestaRoutingModule,
    CommonModule
    ],
})
export class CestaModule {}
