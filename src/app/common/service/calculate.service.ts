import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITv } from '../Models/tv.interface';


@Injectable( )
export class CalculateService {

  private subject = new BehaviorSubject(0);
  chanelCalculate = this.subject.asObservable();

  setPropieties(tvOption:ITv):void{
    const price = this.calculatePrice(tvOption);
    this.subject.next(price); //envia a subject el valor
  };

  getprice():number{
    return this.subject.getValue() //toma el valor desde subject
  }
  calculatePrice(val: ITv): number{
    let price = 0;

    if(val.color == '#9c27b0'){
      price = price+50;
    }

    if(val.resolution == '4K ULTRA HD') {
      price = price+200;
    }

    if(val.tamanio == '10 pulgadas') {
      price = price+10
    }

    return price;
  }

}
