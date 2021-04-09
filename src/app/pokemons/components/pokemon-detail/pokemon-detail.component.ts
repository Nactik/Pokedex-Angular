import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../../models/pokemon-model';
import { PokemonService } from '../../services/pokemon.service';
import { Location } from '@angular/common'

@Component({
  selector: 'pkmn-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  @Input() pokemon?: Pokemon

  constructor(
    private route:ActivatedRoute,
    private pokemonService:PokemonService,
    private location:Location
    ) { }

  ngOnInit(): void {
    this.getPokemon()
  }

  private getPokemon(){
    const id:number = Number(this.route.snapshot.params.id)

    this.pokemonService.getPokemon(id).subscribe(pokemon => this.pokemon = pokemon);
  }

  goBack():void{
    this.location.back();
  }
}
