import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PokemonService } from '../../../../features/pokedex/services/pokemon.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './sidebar.component.html',
  styles: [
    `
      .mat-list-single-selected-option {
        @apply bg-blue-500;
      }
    `,
  ],
})
export class SidebarComponent implements OnInit {

  @Output() close = new EventEmitter();

  pokedexList$ = this.pokemonService.getPokedexList()

  constructor(public pokemonService: PokemonService) {}

  ngOnInit(): void {
  }

}
