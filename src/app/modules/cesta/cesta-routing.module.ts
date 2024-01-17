import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CestaComponent } from './cesta.component';
import { NoProductsPageComponent } from './pages/no-products-page/no-products-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';

const routes: Routes = [
  {
    path: '',
    component: CestaComponent,
    children: [
      { path: '', redirectTo: 'no-products', pathMatch: 'full' },
      { path: 'no-products', component: NoProductsPageComponent },
      { path: 'products', component: ProductsPageComponent },
      { path: '**', redirectTo: 'sign-in', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CestaRoutingModule {}
