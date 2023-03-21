import { AfterViewInit, Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit, AfterViewInit {

  @ViewChild('mytitle') mytitle: ElementRef | undefined;

  titulo = 'Ar you ready?'
  titulo2 = 'Ar you ready?'
  heroName : string | undefined;
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
    console.log(this.heroName?.toUpperCase());
  }

  keyUp(event : KeyboardEvent) { //esta es la forma de captar el tecleo
    if(event.key == "Enter") {
      this.clickGuardar()
    }

    // console.log(event.key);
  }
}

/*Notas:
  interpolacion:
    EN el HTML se puede colocar el operador {{}} el cual nos permite declarar variables, funciones y operaciones
    esto es unidireccional, desde el TS al HTML
  Template referens bariable:
    Ver ejemplo en "ngAfterViewInit()"
  Propiety binding
    En el HTML se coloca la siguiente sintaxis para poder modificar los valores de determinadas variables
    [atributo HTML] = "exprecion"
    esto es unidireccional, desde el TS al HTML
  Event binding
    esta forma de comunicacion se utiliza cuando queremos reaccionar a algun evento segun la siguiente siintaxis
    (click)="function()" (tipo de evento o target) "funcion o procedimiento del ts"
    esto es unidireccional, desde el HTML al TS
    si utilizamos la palabra ($event) podemos capturar el valor del evento
  Atributos, clases y estilos bilding:
    se pueden modificar bajo las siguientes sintaxis:
    [attr.*****]='valor' => ***** se remplasa por el atributo compatible con la etiqueta HTLM y el valor puede ser cualquier variable, funcion u objeto.
    [clas.*****]='valor' => ***** se remplasa por la clase css que se desee aplicar (contenida dentro de su propio .css) y el valor puede ser cualquier variable, funcion u objeto.
    [style.*****]='valor' => ***** se remplasa por una propiedad css que se desee aplicar y el valor puede ser cualquier variable, funcion u objeto.


  PIPES:
    nos permiten cambiar visualmente lainformacion de angular,
    como cambiar de minusculas a mayusculas o formatear la hora
    El valor de la informacion NO cambia, solo lo hace su aspecto
      uppercase y lowercase
      Slice ==> | slice : ii : if alcance [:ii:if)
        corta la cadena de texto en los inices indicados
          ii = indice inicial incluyendo ese indice (obligatorio) acepta variable
          if = indice final sin incluir ese indice (no obligatorio) acepta variables
            si usamos valores negativos empieza a contar desde atras
      Decimal
        la forma de invocarlo es | number:'N1.N2-N3'
          N1 = numero minimo de numeros enteros (por defecto 1)
          N2 = numero minimo de decimales (por defecto 0)
          N3 = numero maximo de decimales (por defecto 3)
      Percent
        la forma de invocarlo es | percent:'N1.N2-N3'
            N1 = numero minimo de numeros enteros (por defecto 1)
            N2 = numero minimo de decimales (por defecto 0)
            N3 = numero maximo de decimales (por defecto 2)
        el valor 1 = 100%
      Currency (https://angular.io/api/common/CurrencyPipe)
        se utiliza para mostrar un valor con el simbolo de una divisa (se basa en ISO4217)
        la forma de invocarlo es | currency:'cod':'symbol':'N1.N2-N3'
            cod = codigo de moneda segun ISO 4217 (ver pag de mas abajo)
            symbol = para que apresca el simbolo de la moneda o code para que aoparesca el codico
            N1 = numero minimo de numeros enteros (por defecto 1)
            N2 = numero minimo de decimales (por defecto 0)
            N3 = numero maximo de decimales (por defecto 2)
        hay que tomar los valires de la pagina "https://es.wikipedia.org/wiki/ISO_4217"
        hay que hacer las importaciones en el app.module.ts
          import localEspArg from '@angular/common/locales/es-AR'
          registerLocaleData(localEspArg)
          y en providers declarar el siguiente objeto
            {provide:LOCALE_ID,useValue:'es-AR'}
      Json
        le da formato para que se renderise bajo JSON es igual al JSON.stringifi()
      Async
        nos permite mostrar la informacion del codigo basado en promesas y observables
      Date
        al igual que currency debe estar cargada la informacion local
          tiene muchas opciones estan aca: https://angular.io/api/common/DatePipe
      Personalizados
        se generan por terminal con el comando de "ng generate pipe [nombre]== ng g p [nombre"
    Se usa colocando dentro de la variable de interpolacion las siguiente estructura:
    {{ Variable | pipe }}
*/
