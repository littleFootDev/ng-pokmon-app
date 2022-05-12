import { Injectable } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { IPokemon } from './pokemon.interface';

@Injectable()
export class PokemonService {

  
  getPokemonList() : IPokemon[] {
    return POKEMONS
  }

  getPokemonById(pokemonId : number) : IPokemon | undefined {
    return POKEMONS.find(pokemon => pokemon.id == pokemonId)
  }

  getPokemonTypeList() : string[] {
    return [
      'Plante',
      'Feu',
      'Eau',
      'Insecte',
      'Normal',
      'Electrik',
      'Poison',
      'Fée',
      'Vol',
      'Combat',
      'Psy',
      'Ténébre',
    ];
  }
}
