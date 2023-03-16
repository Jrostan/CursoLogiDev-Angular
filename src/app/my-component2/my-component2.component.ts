import { AfterContentChecked, AfterContentInit, ContentChild, ContentChildren, DoCheck, Input, OnDestroy, QueryList } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { MyComponent1Component } from '../my-component1/my-component1.component';

@Component({
  selector: 'app-my-component2',
  templateUrl: './my-component2.component.html',
  styleUrls: ['./my-component2.component.css']
})
export class MyComponent2Component implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, OnDestroy {
  @Input() tittle : string | undefined;

  @ContentChild('contentChildA') contentChildA:HTMLElement | undefined; //<<esto funciona para trabajr con solo una etiqueta
  @ContentChildren('contentChildA1') contentChildA1: QueryList<AppComponent> | undefined //<< esto funciona para trabajr con la etiqueta y todos sus componentes
  // esto es el selector del componente incertado (se agrega en el HTML Padre como "#contentChild2")
  // esto nos premite tener acceso desde este TS al contenido incertado en la etiquete <ng-content>

  @ContentChild('contentChildB') contentChildB: MyComponent1Component | undefined; // en este caso estoy insertando un componente completo

  constructor() {
    // console.log('**app-my-component2 -> CONSTRUCTOR');
   }

   ngOnInit(): void {
     console.log('**app-my-component2 -> ngOnInit');
    }

    ngDoCheck(): void {
      //console.log('**app-my-component2 -> ngDoCheck');
    }

    ngAfterContentInit(): void { //esto nos permite confirmar que el componente halla inicializado y renderizado para poder lebantar la informacion de una etiqueta particular <ng-content>
      // console.log('**app-my-component2 -> ngAfterContentInit');
      //console.log(this.contentChildA);
      //console.log('this.contentChildA1: ', this.contentChildA1);
      //console.log(this.contentChildB?.tittle?.length);
    }

    ngAfterContentChecked(): void { //este nos permite escuchar las acciones de @ContentChild y @ContentChildren
      //console.log('**app-my-component2 -> ngAfterContentChecked');
      //console.log(this.contentChildA); //Gracias al NGIF colocado en el H2 esto queda undefine o con el objeto
    }

    ngOnDestroy(): void {
      console.log('**app-my-component2 -> ngOnDistroy');
    }
  }
