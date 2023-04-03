import { Component, OnInit } from '@angular/core';
import { ITv } from './common/Models/tv.interface';
import { BadgeService } from './common/service/badge.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'CursoLogiDev';
  carrito: ITv[] = []
  countTv = 1;
  tvSelector: ITv = <ITv>{}

  constructor(
    private badgeService: BadgeService
  ) {}
  ngOnInit(): void {
    this.badgeService.chanelBadge.subscribe((value)=>{
      if(value == true) {
        this.countTv++;
      } else if(value == false) {
        this.countTv--
      }
    })
  }

  addTvCarrito():void{
    this.carrito.push(this.tvSelector)
  }
}
