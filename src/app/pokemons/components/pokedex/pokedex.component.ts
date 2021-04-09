import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pkmn-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  currentId?:number;
  constructor() { }

  ngOnInit(): void {

  }

  displayPokemon(id:number){
    this.currentId = id;
  }

}
