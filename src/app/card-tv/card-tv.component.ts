import { Component, OnInit } from '@angular/core';
import { BadgeService } from '../common/service/badge.service';

@Component({
  selector: 'app-card-tv',
  templateUrl: './card-tv.component.html',
  styleUrls: ['./card-tv.component.css']
})
export class CardTvComponent{

  status = true;

  constructor(
    private badgeService: BadgeService
  ) { }

  saveTv():void{
    this.badgeService.addTv();
    this.status = !this.status
  }

  changeTv():void{
    this.badgeService.remuveTv();
    this.status = !this.status
  }

  deleteTv():void{

  }

}
