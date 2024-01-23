import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: 'hombres',
    component: LayoutComponent,
    loadChildren: () => import('../hombres/hombres.module').then((m) => m.HombresModule),
  },
  { path: '', redirectTo: 'hombres', pathMatch: 'full' },
  { path: '**', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
