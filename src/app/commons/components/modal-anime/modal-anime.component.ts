import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { IAnime } from '../models/animes';


@Component({
	selector: 'app-modal-anime',
	templateUrl: './modal-anime.component.html',
	styleUrls: ['./modal-anime.component.css']
})
export class ModalAnimeComponent {
	constructor(
    public dialogRef: MatDialogRef<ModalAnimeComponent>,
    @Inject(MAT_DIALOG_DATA) public pokemonList: IAnime[]) {}

  clickClose():void{
    this.dialogRef.close()
  }
}
