import { DoCheck, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component1',
  templateUrl: './my-component1.component.html',
  styleUrls: ['./my-component1.component.css']
})
export class MyComponent1Component implements /*OnChanges,*/ OnInit, DoCheck {

  @Input() tittle: string | undefined; //<== el @input te permite genrar un atributo en la etiqueta del atml | este pipe permite inicialisar como indefinido

  @Output() sendMensage = new EventEmitter<string>(); // Muy importante en el evente emiter declarer el tipo de dato o interfas a emitir

  constructor() {// esto es lo primero que se ejecuta, todavia no esta renderizada la pagina
    // console.log('**app-my-component1 -> CONSTRUCTOR'); //no es combeniente llamar apis, lo ideal es llamar solo lo necesario para que se puede renderizar
   }
   /*
  ngOnChanges(changes: SimpleChanges): void { // este metodo se ejecuta cada vez que los decoradores @input cambian, en caso de haberlos esto se hace antes que el OnInit
    console.log('**app-my-component1 -> ngOnChange');
    //Para obtener lo valores de changes hay que iterer en el objeto
    let cur;
    let prev
    for (let propName in changes){
      let chng = changes[propName];
      cur = JSON.stringify(chng.currentValue);
      prev = JSON.stringify(chng.previousValue)
      console.log(propName);
    };
    console.log(cur); // muestra el valor actual de la variable
    console.log(prev); // muesra el valor previo de la variable
  }*/

  ngOnInit(): void {// este metododo se ejecuta antes que el resto exepto Onchange y constructor en este punto ya se renderizo la interfaz
    //console.log('**app-my-component1 -> ngOnInit'); //recien aca corresponde llamar a las api, peticiones HTTP y logicas de negocis
  }

  ngDoCheck(): void {//este se ejecuta de manera permanente detectando los cambios del componente no se debe ejecutar con el OnChange porque puede generar desvordamiento de memoria (la satura)
    //console.log('**app-my-component1 -> ngDoCheck');
  }

  clickSendMensage2(): void{
    this.sendMensage.emit("mira que ando...")
  }
}
