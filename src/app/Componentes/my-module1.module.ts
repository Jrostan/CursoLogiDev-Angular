import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyComponent1Component } from './my-component1/my-component1.component';
import { MyComponent2Component } from './my-component2/my-component2.component';
import { MyComponent3Component } from './my-component3/my-component3.component';


/* el proposito es organizar las partes de la informacion acomodando la misma en bloques, permitiendo
ectender nuestra aplicacion con funcionalidades y librerias externas.

permite a angular saber las importaciones / exportaciones necesarias para que angular funcione.*/


@NgModule({// <<<Decorador propio de la clase
  declarations: [
    MyComponent1Component,
    MyComponent2Component,
    MyComponent3Component //al no exportarlo no puede ser accedido desde app component pero si desde los niveles inferiores de la app
  ],
  /* en esta seccion se declaran componentes, directivas y pipes que pertenecen a este modulo
  */
  imports: [
    CommonModule
  ],// <<< el commonModule te proveee de todas las directivas y pipes basicas de angular
  /* en esta seccion se colocan todos los modulos exportados por otras clases y que necesiten los componentes de este modulo*/
  exports: [
    MyComponent1Component,
    MyComponent2Component
  ],
  /* en esta seccion se declaran todas las declaretion (las de la primer seccion) que queiras exportar para ser consumidas por otros modulos*/
  providers: [],
  /* se declaran servicios creados en / por este modulo que puedan ser utilizados en el global de la app o en otros modulos*/
  bootstrap: []
  /* define la vista principla de la aplicacion. solo se utiliza por el root module*/
})
export class MyModule1Module { } // este es el nombre de la clase que se declara en el app.module.tr en la seccion inports
