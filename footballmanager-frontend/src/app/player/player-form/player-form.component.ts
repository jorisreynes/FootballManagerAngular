import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-player-form',
	templateUrl: './player-form.component.html',
	styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent {

	constructor(private fb:FormBuilder, private router: Router){
		
	}

	onButtonClicked(event: Event){
		this.router.navigate(['player']);
	}

	PlayerForm= this.fb.group({
		name: [''],
		age: [''], 
		picture: [''],
		type: ['']
	})

	
}
