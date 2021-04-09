import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from '../../models/pokemon-model';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'pkmn-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  @Input() search?:string;
  @Output() pokemonSelected = new EventEmitter<number>();

  pokemons: Pokemon[] = [];

  constructor(private pokemonService:PokemonService) { }

  ngOnInit(): void {
    this.getPokemons(0,20);
  }

  private getPokemons(offset?:number, limit?:number, search?:string):void{
    this.pokemonService.getPokemons(offset,limit,search).subscribe(resp => {
      if( !offset )
          this.pokemons = resp.data
        else
          this.pokemons.push(...resp.data)
    });
  }

  onScroll():void{
    const offset: number = this.pokemons.length;
    const limit:number = 20;

    this.getPokemons(offset,limit, this.search);
  }

  onSelectedPokemon(id:number){
    this.pokemonSelected.emit(id);
  }

  searchPokemons(search:string){
    this.getPokemons(0,20,search);
  }

}
