import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {
  catchError,
  concatAll,
  EMPTY,
  filter,
  finalize,
  from,
  map,
  mergeMap,
  Observable,
  scan,
  switchMap,
  tap
} from 'rxjs';
import {NamedAPIResource, Pokemon, PokemonEntry, PokemonSpecies} from '../../../../../models';
import {PokemonService} from '../../services/pokemon.service';

@Component({
  selector: 'app-view-firstgen',
  templateUrl: 'pokedex-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokedexViewComponent implements OnInit {
  @Input() pokedexRes: NamedAPIResource;
  lang = 'de';
  loading: boolean = false;
  languages = [
    {name: 'Deutsch', code: 'de'},
    {name: 'English', code: 'en'},
    {name: '日本語', code: 'ja'},
    {name: 'Japanese', code: 'ja-Hrkt'},
    {name: 'Romaji', code: 'roomaji'},
    {name: 'Korean', code: 'ko'},
    {name: 'Chinese', code: 'zh-Hans'},
    {name: 'French', code: 'fr'},
    {name: 'Spanish', code: 'es'},
    {name: 'Italian', code: 'it'},
  ]

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) {
  }

  pokemonList$ = this.route.paramMap.pipe(
    switchMap((params) => this.pokemonService.getPokedexList().pipe(
      map((pokedexList) => this.getPokedexWithId(pokedexList, params.get('id'))),
      filter((val) => val.name != ''),
      tap(() => this.loading = true),
      switchMap((val) => this.pokemonService.fetchPokemonEntrysFromPokedex(val)),
      switchMap(this.spreadPokemonEntrysToObservables),
      scan((acc: (PokemonSpecies & Pokemon & { pokedexId: number })[], value) => [...acc, value], []),
    )),
  )

  getPokedexWithId(pokedexList: NamedAPIResource[], id: string | null) {
    return pokedexList.find((entry) => entry.name === id) || {name: '', url: ''}
  }

  spreadPokemonEntrysToObservables = (pokemonEntrys: PokemonEntry[]) => {
    return from(
      pokemonEntrys.map(
        entry =>
          this.pokemonService.getSpezies(entry.pokemon_species)
            .pipe(
              mergeMap((species) =>
                this.pokemonService.getPokemon(
                  species?.varieties.find(
                    (entry) => entry.is_default)?.pokemon || {name: '', url: ''}
                ).pipe(
                  map(pokemon => {
                    return {...species, ...pokemon, pokedexId: entry.entry_number}
                  })
                )
              ),
              catchError(_ => EMPTY)
            )
      )).pipe(concatAll(), finalize(() => this.loading = false),);
  }

  simplecards = true;
  searchstring: string = '';
  pokedex: Observable<PokemonEntry[]>;

  ngOnInit(): void {
  }

  toggleCardStyle() {
    this.simplecards = !this.simplecards;
  }

  setLang(lang: string) {
    this.lang = lang;
  }

  filterPokemon = (pokemon: (PokemonSpecies & Pokemon & { pokedexId: number })) => {
    const filter = this.searchstring.trim().toLowerCase();
    const nameIncludes = (pokemon.names
      .find((entry) => entry.language.name === (this.lang || 'de'))?.name || '')
      .toLowerCase().includes(filter);
    const isType = pokemon.types.find((type) => type.type.name === filter) !== undefined

    return filter === '' || (nameIncludes || isType);
  }
}
