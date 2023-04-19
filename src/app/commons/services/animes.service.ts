import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TypeAnime } from '../components/models/types';
import { PathRest } from '../static/path-rest';
import { Observable } from 'rxjs';
import { IAnime } from '../components/models/animes';

@Injectable() // al no estar declarado en root hay que importarlo en los providers del modulogo gestor xcorrespondiente
export class AnimeService {
  constructor(
    private httpClient: HttpClient
  ) { }

  getAnime(anime: TypeAnime): Observable<IAnime[]> {
    const path = PathRest.GET_ANIME + '/' + anime;
    return this.httpClient.get<IAnime[]>(path)
  }

}
