// Ce fichier est le fichier principal du composant principal

// On importe l'interface OnInit pour intéragir avec le cycle de vie de players
import { Component, OnInit } from '@angular/core';
import{PLAYERS} from './mock-player-list';
import{Player} from './player';
import{ Router } from '@angular/router';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

// On implémente l'interface OnInit et on attribue a playerList la valeur de la constante PLAYERS
export class AppComponent implements OnInit{

	


	constructor(private router: Router) {}
	// On définit la méthode associée à l'interface
	ngOnInit(): void{}

	onButtonClicked(event: Event){
		this.router.navigate(['player/create']);
	}
}

