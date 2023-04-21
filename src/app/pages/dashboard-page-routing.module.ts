import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './dashboard/dashboard-page/dashboard-page.component';
import { PokemonsComponent } from './dashboard/pokemons/pokemons.component';
import { DigimonsComponent } from './dashboard/digimons/digimons.component';
import { MedabotsComponent } from './dashboard/medabots/medabots.component';
import { AnimeGuarsGuard } from '../commons/guards/anime-guars.guard';
import { AnimeGuardChildGuard } from '../commons/guards/anime-guard-child.guard';
import { AnimeGuarsCandeactiveGuard } from '../commons/guards/anime-guars-Candeactive.guard';
import { AdminGuardGuard } from '../commons/guards/admin-guard.guard';

const routes: Routes = [
  { path: '', component:DashboardPageComponent,
  // de esta menera se importan los guards para proteger las rutas
  canActivate:[AnimeGuarsGuard],//esto recibe un array de wards
  canActivateChild:[AnimeGuardChildGuard],// en este caso se ejecuta el guard pero en los ghildren
  children: [ //al opcion children acepta un array de redirecciones para el sub roter-ouler
    { path: 'pokemons', component:PokemonsComponent},
    { path: 'digimons', component:DigimonsComponent, canDeactivate:[AnimeGuarsCandeactiveGuard], canActivate:[AdminGuardGuard]},
    { path: 'medabots', component:MedabotsComponent, canDeactivate:[AnimeGuarsCandeactiveGuard]}, //este guard es el que nos impide o no salir
    {path:'', redirectTo:'/pokemons', pathMatch:'prefix'}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardPagesRoutingModule { }

/* Este modulo esta preparado para ser cargado cuando se requiera es decir por lazy loading */
