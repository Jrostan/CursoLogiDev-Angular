import { Component, OnDestroy, OnInit } from '@angular/core';
import { AnimeService } from 'src/app/commons/services/animes.service';
import { Subscription} from 'rxjs';
import { IAnime, IDeactivecomponent } from 'src/app/commons/components/models/animes';

@Component({
  selector: 'app-digimons',
  templateUrl: './digimons.component.html',
  styleUrls: ['./digimons.component.css']
})
export class DigimonsComponent implements OnInit, OnDestroy, IDeactivecomponent {
  digimonList:IAnime[] = [];
  private subscriptionAnime: Subscription | undefined;

  constructor(private animesSerice: AnimeService) { }

  ngOnInit(): void {
    this.subscriptionAnime = this.animesSerice.getAnime('digimon').subscribe((data)=>{
    this.digimonList = data;})
  }

    ngOnDestroy(): void {
    this.subscriptionAnime?.unsubscribe
  }

  canExist():boolean {
    if (confirm('estas seguro que deseas salir???')) {
      return true;
    } else {
      return false;
    }
  }
}
