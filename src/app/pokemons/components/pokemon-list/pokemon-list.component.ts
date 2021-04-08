import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon-model';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'pkmn-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemons: Pokemon[] = [];
  constructor(private pokemonService:PokemonService) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  private getPokemons():void{
    this.pokemonService.getPokemons().subscribe(resp => this.pokemons = resp.data);
  }

}
