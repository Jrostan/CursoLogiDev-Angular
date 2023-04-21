import { Component, OnDestroy, OnInit } from '@angular/core';
import { AnimeService } from 'src/app/commons/services/animes.service';
import { Subscription} from 'rxjs';
import { IAnime, IDeactivecomponent } from 'src/app/commons/components/models/animes';

@Component({
  selector: 'app-medabots',
  templateUrl: './medabots.component.html',
  styleUrls: ['./medabots.component.css']
})
export class MedabotsComponent implements OnInit, OnDestroy, IDeactivecomponent {

  medabotsList:IAnime[] = [];
  private subscriptionAnime: Subscription | undefined;

  constructor(
    private animesSerice: AnimeService
  ) { }

  ngOnInit(): void {
    this.subscriptionAnime = this.animesSerice.getAnime('medabot').subscribe((data)=>{
      this.medabotsList = data;})
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
