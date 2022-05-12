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
      this.pokemon= this.pokemonService.getPokemonById(+pokemonId);
    }
  }
  goBack(): void {
    this.router.navigate(['/pokemons'])
  }

  goToEditPokemon(pokemon: IPokemon): void {
    this.router.navigate(['/edit/pokemon', pokemon.id]);
  }
}
