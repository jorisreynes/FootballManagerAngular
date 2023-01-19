import { Component } from '@angular/core';
import{PLAYERS} from '../../mock-player-list';
import{Player} from '../../player';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent {
	playerList: Player[] = PLAYERS;




constructor(private router: Router) {}
	ngOnInit(): void{}

	onButtonClicked(event: Event){
		this.router.navigate(['player/create']);
	}
}