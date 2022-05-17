import { Component, OnInit } from '@angular/core';
import { IPokemon } from '../pokemon.interface';

@Component({
  selector: 'app-add-pokemon',
  template: `
   <h2 class="center"> Ajouter un pokémon </h2>
   <app-pokemon-form [pokemon]="pokemon"></app-pokemon-form>
  `,
})
export class AddPokemonComponent implements OnInit {

  pokemon! : IPokemon

  ngOnInit(): void {
    this.pokemon = new IPokemon();
  }

}
