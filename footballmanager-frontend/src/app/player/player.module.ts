import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerFormComponent } from './player-form/player-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PlayerListComponent } from './player-list/player-list.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    PlayerFormComponent,
    PlayerListComponent
  ],
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    AppRoutingModule
  ],
  exports: [
    PlayerFormComponent, 
    PlayerListComponent
  ]
})
export class PlayerModule { }
