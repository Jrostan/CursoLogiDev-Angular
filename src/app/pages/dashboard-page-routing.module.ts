import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './dashboard/dashboard-page/dashboard-page.component';
import { PokemonsComponent } from './dashboard/pokemons/pokemons.component';
import { DigimonsComponent } from './dashboard/digimons/digimons.component';
import { MedabotsComponent } from './dashboard/medabots/medabots.component';

const routes: Routes = [
  { path: '', component:DashboardPageComponent, children: [ //al opcion children acepta un array de redirecciones para el sub roter-ouler
    { path: 'pokemons', component:PokemonsComponent},
    { path: 'digimons', component:DigimonsComponent},
    { path: 'medabots', component:MedabotsComponent},
    {path:'', redirectTo:'/pokemons', pathMatch:'prefix'}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardPagesRoutingModule { }

/* Este modulo esta preparado para ser cargado cuando se requiera es decir por lazy loading */
