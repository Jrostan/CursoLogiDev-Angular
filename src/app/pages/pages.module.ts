import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav'
import { DashboardPageComponent } from './dashboard/dashboard-page/dashboard-page.component';
import { PokemonsComponent } from './dashboard/pokemons/pokemons.component';
import { DigimonsComponent } from './dashboard/digimons/digimons.component';
import { MedabotsComponent } from './dashboard/medabots/medabots.component';
import { DashboardPagesRoutingModule } from './dashboard-page-routing.module';
import { DashboardComponentsModule } from '../commons/shared/dashboard-components.module';
import { AnimeService } from '../commons/services/animes.service';



@NgModule({
  declarations: [
    DashboardPageComponent,
    PokemonsComponent,
    DigimonsComponent,
    MedabotsComponent
  ],
  providers: [
    AnimeService
  ],
  imports: [
    CommonModule,
    DashboardPagesRoutingModule,
    MatSidenavModule,
    DashboardComponentsModule
  ],
  exports: [
    DashboardPageComponent
  ]
})
export class PagesModule { }
