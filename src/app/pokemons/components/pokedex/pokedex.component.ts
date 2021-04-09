import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pkmn-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  defaultId:number = 1;
  constructor() { }

  ngOnInit(): void {

  }

}
