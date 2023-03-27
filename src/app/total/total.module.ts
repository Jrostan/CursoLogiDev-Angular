import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalComponent } from './total.component';



@NgModule({
  declarations: [
    TotalComponent
  ],
  exports: [
    TotalComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TotalModule { }
