import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailComponent } from './pokemons/components/pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './pokemons/components/pokemon-list/pokemon-list.component';

const routes: Routes = [
  {path : "", component: PokemonListComponent, pathMatch: 'full'},
  {path : "detail/:id", component : PokemonDetailComponent},
  {path : "pokedex", component : PokemonListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
