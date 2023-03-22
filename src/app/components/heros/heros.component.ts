import { AfterViewInit, Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit, AfterViewInit {

  @ViewChild('mytitle') mytitle: ElementRef | undefined;

  verTabla = true
  titulo = 'Ar you ready?'
  titulo2 = 'Ar you ready?'
  heroName : string = '';
  disabled = false;
  objPrueba = {val1:'hola', val2:'COMO', val3:'EsTaS'};
  numero = 0.74553
  indice1 = 4
  indice2 = 11
  myPromesa = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('esto es una promesa')
    },3000)
  })
  myDate = new Date()


  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.titulo = 'Lets go...'
    }, 1500)
  }

  ngAfterViewInit(): void {
    /* el id de abajo esta para asegurarnos que no se undefinide el valor
    ver que en la sentencia if aparese el valor (? opcional) para verificar si existe
    tambien se puede verificar solo con 'this.mytitle'
    pero en la linea que modifica nmo parese ya que no hay una condicion opcioal*/
    if (this.mytitle?.nativeElement.innerText != undefined) {
    this.mytitle.nativeElement.innerText='Heros Selector...';}
  }

  clickGuardar(): void{
    this.disabled = !this.disabled
  }

  keyUp(event : KeyboardEvent) { //esta es la forma de captar el tecleo
    if(event.key == "Enter") {
      this.clickGuardar()
    }
    // console.log(event.key);
  }

  clickReset():void{
    this.heroName = '';
    this.disabled = !this.disabled
  }

  clickTabla():void{
    this.verTabla = !this.verTabla
  }
}
