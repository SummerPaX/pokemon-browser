import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, concat, combineLatest, of, Subject } from 'rxjs';
import { Pokemon, PokemonSpecies } from '../../models/index';
import { PokemonRexponse } from '../../types/pokemon-response';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private API_ROOT: string = 'https://pokeapi.co/api/v2';
  pokemonResponse: Observable<PokemonRexponse>;

  constructor(private http: HttpClient) {}

  getPokemons() {
    let params: HttpParams = new HttpParams()
      .set('offset', 241)
      .append('limit', 151);
    console.log(this.API_ROOT + '/pokemon', { params });
    this.pokemonResponse = this.http.get<PokemonRexponse>(
      this.API_ROOT + '/pokemon',
      { params }
    );
  }

  getPokemon(url: string): Observable<Pokemon> {
    console.log(url);

    return this.http.get<Pokemon>(url);
  }

  getSpezies(url: string): Observable<PokemonSpecies> {
    console.log(url);
    return this.http.get<PokemonSpecies>(url);
  }
}
