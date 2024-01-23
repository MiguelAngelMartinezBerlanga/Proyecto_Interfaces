import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: 'mujer',
    component: LayoutComponent,
    loadChildren: () => import('../mujer/mujer.module').then((m) => m.MujerModule),
  },
  {
    path: 'cesta',
    component: LayoutComponent,
    loadChildren: () => import('../cesta/cesta.module').then((c) => c.CestaModule),
  },
  {
    path: 'hombres',
    component: LayoutComponent,
    loadChildren: () => import('../hombres/hombres.module').then((m) => m.HombresModule),
  },
  { path: '', redirectTo: 'mujer', pathMatch: 'full' },
  { path: '**', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
