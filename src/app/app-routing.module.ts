import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerFormComponent } from './player/player-form/player-form.component';
import { PlayerListComponent } from './player/player-list/player-list.component';

const routes: Routes = [

  {path: 'player/create', component : PlayerFormComponent},
  {path: 'player', component : PlayerListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
