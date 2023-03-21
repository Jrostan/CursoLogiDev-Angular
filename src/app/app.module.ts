import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatInputModule} from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import { MyModuleModule } from './components/my-module.module';
import { registerLocaleData } from '@angular/common';

import localEspArg from '@angular/common/locales/es-AR'
registerLocaleData(localEspArg) //de esta manera se inporta la informacion local

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
    MyModuleModule
  ],
  providers: [
    {provide:LOCALE_ID,useValue:'es-AR'} // se inyecta este provider para que trabaje en conjunto con la importacion de info local
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
