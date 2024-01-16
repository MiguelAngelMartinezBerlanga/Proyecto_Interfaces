import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: 'mujer',
    component: LayoutComponent,
    loadChildren: () => import('../mujer/mujer.module').then((m) => m.MujerModule),
  },
  { path: '', redirectTo: 'mujer', pathMatch: 'full' },
  { path: '**', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
