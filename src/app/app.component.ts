import { AfterViewInit, ViewChild } from '@angular/core';
import { Component, DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import { MyComponent2Component } from './my-component2/my-component2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, DoCheck, AfterViewInit {
  title = 'CursoLogiDev';
  show = false;
  show2 = false;

  @ViewChild(MyComponent2Component) viewChild: MyComponent2Component | undefined;

  constructor(){ // le agrege manualmete el contructor
    // console.log('***APP-component*** -> CONSTRUCTOR');
  }
  ngDoCheck(): void {
    // console.log('***APP-component*** -> ngDoCheck');
    // console.log(this.viewChild);
  }
  ngOnChanges(changes: SimpleChanges): void {  } // esta vacio porque al no haber @inputs nunca se va a ejecutar

  ngAfterViewInit(): void { //esto verifica que el componente hijo (atrabez de las etiquetas @viewChild o @ViewChildren) halla renderizado tambien cuenta con su vercion check nfAfterViewCheckd
    // console.log('***APP-component*** -> ngAfterViewInit');
  }

  getMensage(val: string): void{
    console.log(val);
  }

  clickChangeTitle(): void{
    if(this.title != 'CAMBIANDO***************************'){
    this.title = 'CAMBIANDO***************************'} else {
      this.title = '***************************CAMBIANDO'
    };
    if(this.show) {
      this.show = false
    } else {
      this.show = true
    };
  }

  clickbibi2(){
    if(this.show2) {
      this.show2 = false
    } else {
      this.show2 = true
    };
  }
}
