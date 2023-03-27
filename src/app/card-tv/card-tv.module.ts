import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTvComponent } from './card-tv.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { OptionTvModule } from '../option-tv/option-tv.module';



@NgModule({
  declarations: [
    CardTvComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    OptionTvModule
  ],
  exports: [
    CardTvComponent
  ]
})
export class CardTvModule { }
