import { Component, OnInit } from '@angular/core';
import pokemons from '../../assets/pokemons-secondgen.json';

@Component({
  selector: 'app-view-secondgen',
  template: `
    <div class="flex justify-center w-full">
      <input
        [(ngModel)]="searchstring"
        class="w-2/3 bg-stone-800 ring- ring-black rounded-full text-center p-1"
        placeholder="Search..."
        (ngModelChange)="inputchanged()"
      />
    </div>
    <div *ngFor="let pokemon of pokemons">
      <!-- <app-pokemoncard [pokemon]="pokemon"></app-pokemoncard> -->
    </div>
  `,
})
export class ViewSecondgenComponent implements OnInit {
  pokemons: any = pokemons.Pokemon as any;

  constructor() {}

  searchstring: string = '';
  inputchanged() {
    this.pokemons = pokemons.Pokemon.filter(
      (p) =>
        p.name.toLowerCase().indexOf(this.searchstring.trim().toLowerCase()) >
          -1 || p.types.includes(this.searchstring.toLowerCase())
    ) ;
  }

  ngOnInit(): void {}
}
