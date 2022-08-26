import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, pluck, ReplaySubject, tap} from 'rxjs';
import {NamedAPIResource, Pokedex, Pokemon, PokemonSpecies,} from '../../../../models';
import {PokedexResponse} from '../../../../types/pokemon-response';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  pokedexListRequest$ = this.http.get<PokedexResponse>(
    'https://pokeapi.co/api/v2/pokedex',
    {
      params: new HttpParams().set('limit', 50),
    });
  pokedexResponse$ = new ReplaySubject<NamedAPIResource[]>(1);

  constructor(private http: HttpClient) {
    this.pokedexListRequest$.pipe(pluck('results')).subscribe(this.pokedexResponse$)
  }

  getPokedexList(): Observable<NamedAPIResource[]> {
    return this.pokedexResponse$.asObservable()
  }

  fetchPokemonEntrysFromPokedex(entry: NamedAPIResource) {
    return this.http.get<Pokedex>(entry.url).pipe(tap(console.log),pluck('pokemon_entries'));
  }

  getPokemon(entry: NamedAPIResource): Observable<Pokemon> {
    return this.http.get<Pokemon>(entry.url);
  }

  getSpezies(entry: NamedAPIResource): Observable<PokemonSpecies> {
    return this.http.get<PokemonSpecies>(entry.url);
  }
}
