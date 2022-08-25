import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {catchError, concatAll, filter, from, map, Observable, of, pluck, scan, Subject, switchMap} from 'rxjs';
import {NamedAPIResource, PokemonEntry, PokemonSpecies} from '../../../../../models';
import {PokemonService} from '../../services/pokemon.service';

@Component({
  selector: 'app-view-firstgen',
  templateUrl: 'pokedex-view.component.html',
})
export class PokedexViewComponent implements OnInit, OnDestroy {
  @Input() pokedexRes: NamedAPIResource;
  destroy$ = new Subject<void>();
  lang = 'de';

  speciesList$ = this.route.paramMap.pipe(
    switchMap((params) => this.pokemonService.getPokedexList().pipe(
      map((pokedexList) => {
        return pokedexList.find((entry) => entry.name === params.get('id')) || {name: '', url: ''}
      }),
      filter((val) => val.name != ''),
      switchMap((pokedexUrl) => {
        return this.pokemonService
          .getPokedex(pokedexUrl)
          .pipe(pluck('pokemon_entries'));
      }),
      switchMap((pokemonEntrys) => {
        return from(
          pokemonEntrys.map(
            entry =>
              this.pokemonService.getSpezies(entry.pokemon_species)
                .pipe(
                  catchError(_ => of(null))
                )
          )
        )
          .pipe(
            concatAll(),
            scan((acc: PokemonSpecies[], value) => {
              if (value) acc.push(value)
              return acc
            }, []),
          )
      }),
    )),
    // tap((data) => console.log(data))
  )


  simplecards = true;

  constructor(
    private route: ActivatedRoute,
    public pokemonService: PokemonService
  ) {
  }

  searchstring: string = '';

  pokedex: Observable<PokemonEntry[]>;

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {
  }

  toggleCardStyle() {
    this.simplecards = !this.simplecards;
  }

  setLang(lang: string) {
    this.lang = lang;
  }
}
