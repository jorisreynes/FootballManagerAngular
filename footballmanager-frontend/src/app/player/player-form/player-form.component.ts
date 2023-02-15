import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PLAYERS } from 'src/app/mock-player-list';
import { Player } from 'src/app/player';


@Component({
	selector: 'app-player-form',
	templateUrl: './player-form.component.html',
	styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {
	playerForm: FormGroup
	player: Player

	constructor(private fb:FormBuilder, private router: Router){

	}
	ngOnInit() {
		this.player = new Player(PLAYERS.length - 1, 0, '', '', '', new Date())
		this.playerForm= this.fb.group({
			name: new FormControl(undefined),
			age: new FormControl(undefined),
			picture: new FormControl(undefined),
			type: new FormControl(undefined)
		})
	}

	onButtonClicked(event: Event){
		this.router.navigate(['player']);
	}

	get controls() {
		return this.playerForm.controls
	}

	addPlayer(){
		this.player.name = this.controls['name'].value;
		this.player.age = this.controls['age'].value;
		this.player.picture = this.controls['picture'].value;
		this.player.type = this.controls['type'].value;
		console.log(this.player)

		PLAYERS.push(this.player)


	}
}