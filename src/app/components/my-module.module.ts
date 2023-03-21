import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HerosComponent } from '../components/heros/heros.component'

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import { ComponetPruebaComponent } from './componet-prueba/componet-prueba.component';
import { CustomCurrencyPipe } from './custom-currency.pipe';


@NgModule({
  declarations: [
    HerosComponent,
    ComponetPruebaComponent,
    CustomCurrencyPipe],
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
    CommonModule
  ],
  exports: [
    HerosComponent
  ]
})
export class MyModuleModule { }
