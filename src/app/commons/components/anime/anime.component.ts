import { Component, OnInit, Input } from '@angular/core';
import { IAnime } from '../models/animes';
import { MatDialog } from '@angular/material/dialog';
import { ModalAnimeComponent } from '../modal-anime/modal-anime.component';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit {
  @Input() anime = <IAnime>{};

  constructor( public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  clickEvolutions(): void {
		this.dialog.open(ModalAnimeComponent, {
			data: this.anime.evolutions
		});
	}

}
