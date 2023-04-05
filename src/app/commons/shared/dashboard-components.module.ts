import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeComponent } from '../components/anime/anime.component';
import { HeaderComponent } from '../components/header/header.component';
import { MenuComponent } from '../components/menu/menu.component';

import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [
    AnimeComponent,
    HeaderComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
		MatIconModule,
		MatListModule,
		MatButtonModule,
		MatCardModule,
		MatDialogModule
  ],
  exports: [
    AnimeComponent,
    HeaderComponent,
    MenuComponent
  ]
})
export class DashboardComponentsModule { }
