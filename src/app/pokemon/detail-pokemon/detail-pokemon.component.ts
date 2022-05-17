import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPokemon } from '../pokemon.interface';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styles: [
  ]
})
export class DetailPokemonComponent implements OnInit {

  pokemonList!: IPokemon[];
  pokemon!: IPokemon | undefined;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private pokemonService: PokemonService,
  ) { }

  ngOnInit(): void {
    const pokemonId : string|null = this.route.snapshot.paramMap.get('id');
    
    if(pokemonId) {
      this.pokemonService.getPokemonById(+pokemonId)
        .subscribe(pokemon => this.pokemon = pokemon);
    }
  }

  deletePokemon(pokemon: IPokemon) {
    this.pokemonService.deletePokemonById(pokemon.id)
      .subscribe(() => this.goBack());
  }
  goBack(): void {
    this.router.navigate(['/pokemons'])
  }

  goToEditPokemon(pokemon: IPokemon): void {
    this.router.navigate(['/edit/pokemon', pokemon.id]);
  }
}
