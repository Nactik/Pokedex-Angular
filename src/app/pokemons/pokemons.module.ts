import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { PokemonsRoutingModule } from './pokemons-routing.module';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';


@NgModule({
  declarations: [PokemonListComponent],
  imports: [
    CommonModule,
    PokemonsRoutingModule,
    HttpClientModule,
  ]
})
export class PokemonsModule { }
