import { NgModule } from '@angular/core';

import { CestaRoutingModule } from './cesta-routing.module';
import { NoProductsPageComponent } from './pages/no-products-page/no-products-page.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ResumenCardComponent } from './components/resumen-card/resumen-card.component';

@NgModule({
    declarations: [
        ResumenCardComponent,
        NoProductsPageComponent,
        ProductsPageComponent,
        ProductTableComponent
    ],

  imports: [
    CestaRoutingModule,
    ],
})
export class CestaModule {}
