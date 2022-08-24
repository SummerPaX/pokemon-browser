import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pluck, share } from 'rxjs';
import {
  NamedAPIResource,
  Pokedex,
  Pokemon,
  PokemonSpecies,
} from '../../../../models';
import { PokedexResponse, PokemonResponse } from '../../../../types/pokemon-response';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private API_ROOT: string = 'https://pokeapi.co/api/v2';
  pokedexResponse: Observable<NamedAPIResource[]>;

  constructor(private http: HttpClient) {}

  getPokemons() {
    let params: HttpParams = new HttpParams()
      .set('offset', 241)
      .append('limit', 151);
    console.log(this.API_ROOT + '/pokemon', { params });
    return this.http.get<PokemonResponse>(this.API_ROOT + '/pokemon', {
      params,
    }).pipe(share());
  }

  getPokedexList(): Observable<NamedAPIResource[]> {
    let params: HttpParams = new HttpParams().set('limit', 50);
    console.log(this.API_ROOT + '/pokedex', { params });
    return this.pokedexResponse = this.http
      .get<PokedexResponse>(this.API_ROOT + '/pokedex', {
        params,
      })
      .pipe(pluck('results'));
  }

  getPokedex(url: string) {
    return this.http.get<Pokedex>(url);
  }

  getPokemon(url: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(url);
  }

  getSpezies(url: string): Observable<PokemonSpecies> {
    return this.http.get<PokemonSpecies>(url);
  }
}
