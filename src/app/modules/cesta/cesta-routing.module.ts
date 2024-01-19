import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CestaComponent } from './cesta.component';
import { ProductsPageComponent } from './pages/products-cesta-page/products-cesta-page.component';

const routes: Routes = [
  {
    path: '',
    component: CestaComponent,
    children: [
      { path: '', redirectTo: 'products-cesta', pathMatch: 'full' },
      { path: 'products-cesta', component: ProductsPageComponent },
      { path: '**', redirectTo: 'sign-in', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CestaRoutingModule {}
