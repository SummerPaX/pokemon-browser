import { Component, OnInit } from '@angular/core';
import pokemons from '../../assets/pokemons-secondgen.json';

@Component({
  selector: 'app-view-secondgen',
  template: `
    <div class="flex h-screen w-screen items-center justify-center">
      <p class="text-4xl">Pokedex wählen!</p>
    </div>
  `,
})
export class ViewSecondgenComponent {}
