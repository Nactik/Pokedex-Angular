import { Component, Input, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../../models/pokemon-model';
import { PokemonService } from '../../services/pokemon.service';
import { Location } from '@angular/common'

@Component({
  selector: 'pkmn-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnChanges {

  @Input() id?:number;
  pokemon?: Pokemon;

  constructor(
    private route:ActivatedRoute,
    private pokemonService:PokemonService,
    private location:Location
    ) { }

  ngOnChanges(): void {
    this.getPokemon(this.id);
  }

  private getPokemon(id?:number){
    if(!id)
      id=1;

    this.pokemonService.getPokemon(id).subscribe(pokemon => this.pokemon = pokemon);
  }

  goBack():void{
    this.location.back();
  }
}
