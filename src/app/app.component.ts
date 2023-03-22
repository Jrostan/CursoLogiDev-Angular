import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CursoLogiDev';
}


/*Notas:
    BINDINGS:
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

  Directivas:
    *Directivas de Atributos:
        ->ngModel
            implementa bindings
            sintaxis [(ngModel)]='miVariable'
            para que funcione es necesario importar en el modulo "FormModule from @angular/forms/forms"
            en la actualidad se usa muy poco ya que la informacion se controla atravez de los formularios reactivos de Angular
        ->ngStyle
            permite asignar estilos en linea desde el TS
            sintaxis [ngStile]="variableConElEstilo"
              Ej:
                variableConElEstilo = {   position: relative;
                                          background-color: #4a4a4a;
                                          margin-bottom: 1rem;
                                          border-top-right-radius: 5px;
                                          border-top-left-radius: 5px;
                                          padding-left: 0.5rem;
                                          padding-right: 0.5rem;}
        ->ngClass
            permite aniadir o eliminar varias clases
            sintaxis [ngClas]="{'nombre-de-clase':true condition}" true condition == boolean
    *Directivas Estructurales:
    NO SE PUEDEN USAR DOS JUNTAS EN LA MISMA ETIQUETA
      ->*ngIf:
            Nos permite incluir condiciones de logica en nuestro HTML
            sintaxis *ngIf="condicion" la condicion tiene que ser un boolean o algo que retorne uno
            sintaxis *ngIf="condicion; else condicion2" la condicion2 es lo que muestra so la condicion es false ej ng-template
            Tener en cuenta que cada vez que cambie se ejecuta todo el siclo de vida del componente
      ->*ngFor:
            Nos permite ejecutar bucles (for, wile, foreach, etc) Con esta directiva podemos evaluar de acuerdo a nuestra condicion n veces.
            sintaxis *ngFor="let variableTemporal of myArray" ==> esta recorre todos los elementos del array
            sintaxis + complemento *ngFor="let variableTemporal of myArray ; let i = index" ==> agregando esta segunda parte tenemos acceso al indice de cada elemento del array
            sintaxis + complemento *ngFor="let variableTemporal of myArray ; trackBy:trackByItems" ==> el agregado de la segunda parte aumnenta el rendimiento de la app, cuando las colecciones son muy grandes agregar o barroar algun objeto hace que se desencadenen muchas acciones
            la funcion trackBy tiene que ser cargada anonima en el HTML (es decir sin lso parentecis), esta tiene que devolver los ID
            Esta ultima es preferible buscarla en la doc de ANGULAR
            la funcion que agreges va devolver el identificador del item que modifiques por lo cual la app solo vuelve a renderisar ese objeto
            crea una etiqueta contenedora por cada elemeto de la iteracion
      ->*ngSwitch:
            Nos permite evaluar varias sentencias comportandose de la misma manera que el *ngIf comportandose igual que el swuith de los lenguajes
            sintaxis [ngSwitch]="miEvaluacion"
            sintaxis resultado *ngSwitghCase="valor" valor es el caso que evalua la directiva ==> funciona como el *ngIf pero con la evaluacion del Swich
      ->ng-template
            Como su mobre lo indica la plantilla ng-template representa una plantilla esto significa que contendra parte de una plantilla esta se puede convinar con otras plantillas para obtener la plantilla final
            sintaxis <ng-template #cargando> <== cargando es como puede ser llamado este template
                        <div>Cargando...</div>
                     </ng-template>
      ->ng-container
    *Componentes
*/
