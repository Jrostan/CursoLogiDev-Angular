import { Component, OnDestroy, OnInit } from '@angular/core';
import { AnimeService } from 'src/app/commons/services/animes.service';
import { Subscription} from 'rxjs';
import { IAnime } from 'src/app/commons/components/models/animes';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit, OnDestroy {
  pokemonList:IAnime[] = [];
  private subscriptionAnime: Subscription | undefined;

  constructor(
    private animesSerice: AnimeService
  ) { }

  ngOnInit(): void {
    this.subscriptionAnime = this.animesSerice.getAnime('pokemon').subscribe((data)=>{
    this.pokemonList = data;})
  }
  //MUY IMPORTANTE DESUSCRIBIRSE CUANDO SE DESTRUYA EL OBJETO
  ngOnDestroy(): void {
    this.subscriptionAnime?.unsubscribe
  }
}
