import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IHero } from '../../../common/Interface'

@Component({
  selector: 'app-heros-structurales',
  templateUrl: './heros-structurales.component.html',
  styleUrls: ['./heros-structurales.component.css']
})
export class HerosStructuralesComponent implements OnInit, AfterViewInit {

  @ViewChild('mytitle') mytitle: ElementRef | undefined;
  //@ViewChild('mytitle') mytitle: ElementRef<HTMLTitleElement> | undefined; //al hacer esto le indico el elemento exacto que voy a traer y me evito la verificacions
  @ViewChild('tabla') mitabla: ElementRef | undefined;

  verTabla = false;
  titulo = 'Ar you ready?'
  heroName : string = '';
  disabled = false;
  myHeroeList: IHero[] = [
    {id:1,
    nombre:'Batman'},
    {id:2,
    nombre:'Superman'},
    {id:3,
    nombre:'Spiderman'},
    {id:4,
    nombre:'Ironman'}
    ]
  heroeSeleccionado:IHero = <IHero> {}; //de esta manera se inicialisa un objeto bajo interfas de manera vacia

  constructor(
    private detectChanges:ChangeDetectorRef //inicialisamos eta variable para poder monitorear los cambio de lo afectado por el ngIf
  ) { }

  ngOnInit(): void {
     setTimeout(()=>{
       this.verTabla = true; //hacemos visible la tabla
    //   console.log(this.mitabla); //en este momento no se muestra la informacion, porque no fui inicializado con el doom
    //   this.detectChanges.detectChanges(); //forzamos la deteccion de cambios
    //   console.log(this.mitabla); //ahora si, porque forzamos la deteccion de cambios
     },1500)
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

  clickAddHeroe():void{
    const objetoMayor:IHero = this.myHeroeList.reduce((prev, current)=>
      prev.id>current.id?prev:current
    )
    this.myHeroeList.push({id: objetoMayor.id + 1 , nombre:this.heroName})
  }

  clickseleccionarHeroe(heroe:IHero):void{
    this.heroeSeleccionado = heroe
  }
}

