import { Component, OnInit } from '@angular/core';
import pokemons from '../../assets/pokemons-firstgen.json';
import { PokemonService } from '../services/pokemon.service';
import { Observable } from 'rxjs';
import { Pokemon } from '../../models/index';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger,
} from '@angular/animations';

@Component({
  selector: 'app-view-firstgen',
  template: `
    <div class="flex justify-center w-full">
      <input
        [(ngModel)]="searchstring"
        class="w-2/3 bg-stone-800 ring- ring-black rounded-full text-center mb-2 p-1"
        placeholder="Search..."
        (ngModelChange)="inputchanged()"
      />
    </div>
    <div
      class="w-full flex justify-center"
      *ngFor="let pokemon of (pokemonService.pokemonResponse | async)?.results"
      @pageAnimations
    >
      <app-pokemoncard
        class="w-max"
        [pokemonurl]="pokemon.url"
        [filter]="searchstring"
      ></app-pokemoncard>
    </div>
  `,
  animations: [
    trigger('pageAnimations', [
      transition(':enter', [
        query('app-pokemoncard', [
          style({ opacity: 0, transform: 'translateX(-100px)' }),
          stagger('3000ms', [
            animate(
              '2s cubic-bezier(0.35, 0, 0.25, 1)',
              style({ opacity: 1, transform: 'none' })
            ),
          ]),
        ]),
      ]),
    ]),
  ],
})
export class ViewFirstgenComponent implements OnInit {
  constructor(public pokemonService: PokemonService) {}

  searchstring: string = '';
  inputchanged() {}

  ngOnInit(): void {
    this.pokemonService.getPokemons();
  }
}
