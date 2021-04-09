import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  @Output() pokemonSelected = new EventEmitter<number>();

  ngOnInit(): void {
    this.getPokemons(0,20);
  }

  private getPokemons(offset?:number, limit?:number):void{
    this.pokemonService.getPokemons(offset,limit).subscribe(resp => {
        this.pokemons.push(...resp.data)
    });
  }

  onScroll():void{
    const offset: number = this.pokemons.length;
    const limit:number = 20;

    this.getPokemons(offset,limit);
  }

  onSelectedPokemon(id:number){
    this.pokemonSelected.emit(id);
  }

}
