import { NgModule } from '@angular/core';

import { CestaRoutingModule } from './cesta-routing.module';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { ProductsPageComponent } from './pages/products-cesta-page/products-cesta-page.component';
import { ResumenCardComponent } from './components/resumen-card/resumen-card.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        ResumenCardComponent,
        ProductsPageComponent,
        ProductTableComponent
    ],

  imports: [
    CestaRoutingModule,
    CommonModule
    ],
})
export class CestaModule {}
