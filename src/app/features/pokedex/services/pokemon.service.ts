import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, pluck, share} from 'rxjs';
import {
  NamedAPIResource,
  Pokedex,
  Pokemon,
  PokemonSpecies,
} from '../../../../models';
import {PokedexResponse, PokemonResponse} from '../../../../types/pokemon-response';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private API_ROOT: string = 'https://pokeapi.co/api/v2';
  pokedexResponse: Observable<NamedAPIResource[]> | undefined = undefined;

  constructor(private http: HttpClient) {
  }

  getPokemons() {
    let params: HttpParams = new HttpParams()
      .set('offset', 241)
      .append('limit', 151);
    console.log(this.API_ROOT + '/species', {params});
    return this.http.get<PokemonResponse>(this.API_ROOT + '/pokemon', {
      params,
    }).pipe(share());
  }

  getPokedexList(): Observable<NamedAPIResource[]> {

    let params: HttpParams = new HttpParams().set('limit', 50);
    // console.log(this.API_ROOT + '/pokedex', {params});
    if (!this.pokedexResponse)
      this.pokedexResponse = this.http
        .get<PokedexResponse>(this.API_ROOT + '/pokedex', {
          params,
        })
        .pipe(pluck('results'));

    return this.pokedexResponse
  }

  getPokedex(url: NamedAPIResource) {
    return this.http.get<Pokedex>(url.url);
  }

  getPokemon(url: NamedAPIResource): Observable<Pokemon> {
    console.log(url)
    return this.http.get<Pokemon>(url.url);
  }

  getSpezies(url: NamedAPIResource): Observable<PokemonSpecies> {
    return this.http.get<PokemonSpecies>(url.url);
  }
}
