import { Component, OnDestroy } from '@angular/core';
import { CalculateService } from '../common/service/calculate.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent{

  constructor(
    public calculateService: CalculateService
  ) { }

  /*

  implementado el OnInit
  podemos usar este metodo
  price = 0
  ngOnInit(): void {
    this.calculateService.chanelCalculate.subscribe((valor:number)=>{
      this.price = valor
    })
  }

    ngOnDestroy(): void {
    this.calculateService.chanelCalculate.unsubscribe()
  }

  ngOnInit(): void {
  colocando en el HTLM esto:
  <label for="">{{price  | currency}}</label>

  */

}
