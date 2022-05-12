import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPokemon } from '../pokemon.interface';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styles: [
  ]
})
export class ListPokemonComponent implements OnInit {
  pokemonList: IPokemon[] = [];
  
  constructor(
    private router: Router,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.pokemonList =  this.pokemonService.getPokemonList();
  }

  goToPokemon(pokemon: IPokemon): void {
    this.router.navigate(['pokemon', pokemon.id]);
  }
}
