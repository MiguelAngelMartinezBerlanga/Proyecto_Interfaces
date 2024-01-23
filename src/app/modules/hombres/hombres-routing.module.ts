import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HombresComponent } from './hombres.component';
import { CalzadoComponent } from './pages/calzado/calzado.component';
import { PantalonesComponent } from './pages/pantalones/pantalones.component';
import { SudaderasComponent } from './pages/sudaderas/sudaderas.component';
import { CamisetasComponent } from './pages/camisetas/camisetas.component';
import { ChaquetasComponent } from './pages/chaquetas/chaquetas.component';


const routes: Routes = [
  {
    path: '',
    component: HombresComponent,
    children: [
      { path: '', redirectTo: 'calzado', pathMatch: 'full' },
      { path: 'calzado', component: CalzadoComponent },
      { path: 'pantalones', component: PantalonesComponent },
      { path: 'sudaderas', component: SudaderasComponent },
      { path: 'camisetas', component: CamisetasComponent },
      { path: 'chaquetas', component: ChaquetasComponent },
      { path: '**', redirectTo: 'error/404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HombresRoutingModule { }
