import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MujerComponent } from './mujer.component';
import { CalzadoComponent } from './pages/calzado/calzado.component';
import { SudaderasComponent } from './pages/sudaderas/sudaderas.component';

const routes: Routes = [
  {
    path: '',
    component: MujerComponent,
    children: [
      { path: '', redirectTo: 'calzado', pathMatch: 'full' },
      { path: 'calzado', component: CalzadoComponent },
      { path: 'sudaderas', component: SudaderasComponent },
      { path: '**', redirectTo: 'error/404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MujerRoutingModule { }
