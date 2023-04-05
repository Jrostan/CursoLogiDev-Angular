import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private _router: Router) {}
	listMenu = [
		{ name: 'Pokemons', path: '/dashboard/pokemons', icon: 'account_circle' },
		{ name: 'Medabots', path: '/dashboard/medabots', icon: 'star_rate' },
		{ name: 'Digimons', path: '/dashboard/digimons', icon: 'label_important' }
	];

	logout(): void {
		void this._router.navigateByUrl('login');
	}

  ngOnInit(): void {
  }

}
