import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HerosComponent } from '../components/heros/heros.component'

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import { ComponetPruebaComponent } from './componet-prueba/componet-prueba.component';
import { CustomCurrencyPipe } from './custom-currency.pipe';
import { FormsModule } from '@angular/forms';
import { HerosStructuralesComponent } from './heros-structurales/heros-structurales.component';


@NgModule({
  declarations: [
    HerosComponent,
    ComponetPruebaComponent,
    CustomCurrencyPipe,
    HerosStructuralesComponent],
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    HerosComponent,
    HerosStructuralesComponent
  ]
})
export class MyModuleModule { }
