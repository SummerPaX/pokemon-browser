import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable, pluck, Subject, switchMap, takeUntil, tap} from 'rxjs';
import {NamedAPIResource, PokemonEntry} from '../../../../../models';
import {PokemonService} from '../../services/pokemon.service';

@Component({
  selector: 'app-view-firstgen',
  template: `
    <div class="flex justify-center w-full my-2 sticky top-1 z-10">
      <button mat-icon-button [matMenuTriggerFor]="menu">
        <mat-icon>translate</mat-icon>
      </button>
      <mat-menu #menu="matMenu">
        <button mat-menu-item (click)="setLang('de')">Deutsch</button>
        <button mat-menu-item (click)="setLang('en')">English</button>
        <button mat-menu-item (click)="setLang('ja')">日本語</button>
        <button mat-menu-item (click)="setLang('ja-Hrkt')">Japanese</button>
        <button mat-menu-item (click)="setLang('roomaji')">Romaji</button>
        <button mat-menu-item (click)="setLang('ko')">Korean</button>
        <button mat-menu-item (click)="setLang('zh-Hant')">Chinese</button>
        <button mat-menu-item (click)="setLang('zh-Hans')">Chinese</button>
        <button mat-menu-item (click)="setLang('fr')">French</button>
        <button mat-menu-item (click)="setLang('es')">Spanish</button>
        <button mat-menu-item (click)="setLang('it')">Italian</button>
      </mat-menu>
      <input
        [(ngModel)]="searchstring"
        class="max-w-2lg w-[550px] bg-stone-800 shadow-sm rounded-full text-center p-1"
        placeholder="Search..."
        (ngModelChange)="inputchanged()"
      />
      <button mat-icon-button (click)="toggleCardStyle()">
        <mat-icon>dashboard</mat-icon>
      </button>
    </div>
    <div
      [class]="
        simplecards ? 'flex-wrap flex-row' : 'flex-col items-center w-full'
      "
      class="flex justify-center"
    >
      <div *ngFor="let pokemon of pokedox$ | async; let i = index">
        <app-simplepokemoncard
          [class]="simplecards ? '' : 'hidden'"
          class="pokecard"
          [pokemonEntry]="pokemon"
          [filter]="searchstring"
          [lang]="lang"
        >
        </app-simplepokemoncard>
        <app-pokemoncard
          [class]="simplecards ? 'hidden' : ''"
          class="w-max pokecard"
          [pokemonEntry]="pokemon"
          [filter]="searchstring"
          [lang]="lang"
        >
        </app-pokemoncard>
      </div>
    </div>
  `,
})
export class PokedexViewComponent implements OnInit, OnDestroy {
  @Input() pokedexRes: NamedAPIResource;
  destroy$ = new Subject<void>();
  lang = 'de';

  pokedox$ = this.route.paramMap.pipe(
    switchMap((params) => {
      return this.pokemonService.pokedexResponse.pipe(
        switchMap((pokedexList) => {
          return this.pokemonService
            .getPokedex(
              pokedexList.find((entry) => entry.name === params.get('id'))
                ?.url || ''
            )
            .pipe(pluck('pokemon_entries'));
        })
      );
    })
  );

  simplecards = true;
  constructor(
    private route: ActivatedRoute,
    public pokemonService: PokemonService
  ) {}

  searchstring: string = '';
  inputchanged() {}
  pokedex: Observable<PokemonEntry[]>;

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {
    /* this.pokemonResponse = this.pokemonService
      .getPokemons()
      .pipe(pluck('results')); */
    this.getPokedex();
  }

  toggleCardStyle() {
    this.simplecards = !this.simplecards;
  }

  getPokedex() {
    this.route.paramMap
      .pipe(
        takeUntil(this.destroy$),
        switchMap((params) => {
          return this.pokemonService.pokedexResponse.pipe(
            tap((pokedexList) => {
              this.pokedex = this.pokemonService
                .getPokedex(
                  pokedexList.find((entry) => entry.name === params.get('id'))
                    ?.url || ''
                )
                .pipe(pluck('pokemon_entries'));
            })
          );
        })
      )
      .subscribe();
  }
  setLang(lang: string) {
    this.lang = lang;
  }
}
