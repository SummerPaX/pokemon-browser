import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
    `
      .mat-list-single-selected-option {
        @apply bg-blue-500;
      }
    `,
  ],
})
export class NavbarComponent implements OnInit {

  @Output() close = new EventEmitter();

  constructor(public pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokedexList();
  }
}
