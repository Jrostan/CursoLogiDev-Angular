import { CommonModule } from '@angular/common';
import { OptionTvComponent } from '../option-tv/option-tv.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ColorCircleModule } from 'ngx-color/circle';
import { TotalModule } from './../total/total.module';



@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    OptionTvComponent
  ],
  exports: [
    OptionTvComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
		MatSlideToggleModule,
		MatSelectModule,
		TotalModule,
    ColorCircleModule
  ]
})
export class OptionTvModule { }
