import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { IPokemon } from './pokemon.interface';

@Injectable()
export class PokemonService {

  constructor(private http: HttpClient) {

  }
  getPokemonList() : Observable<IPokemon[]> {
    return this.http.get<IPokemon[]>('api/pokemons').pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    )
  }

  getPokemonById(pokemonId : number) :Observable<IPokemon|undefined> {
    return this.http.get<IPokemon>(`api/pokemons/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    )
  }

  searchpokemonList(term: string) : Observable<IPokemon[]> {

    if(term.length <= 1) {
      return of([])
    }
    return this.http.get<IPokemon[]>(`api/pokemons/?name=${term}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }
  updatePokemon(pokemon : IPokemon) : Observable<null> {
    const httpOptions = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json' 
      })
    };

    return this.http.put('api/pokemons', pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    )
  }

  addPokemon(pokemon : IPokemon) : Observable<IPokemon> {
    const httpOptions = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json' 
      })
    };

    return this.http.post<IPokemon>('api/pokemons', pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  deletePokemonById(pokemonId: number) : Observable<null> {
    return this.http.delete(`api/pokemons/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    )
  }

  private log(response: any) {
    console.table(response);
  }

  private handleError(error : Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
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
      'F??e',
      'Vol',
      'Combat',
      'Psy',
      'T??n??bre',
    ];
  }
}
