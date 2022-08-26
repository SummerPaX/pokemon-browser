import {Component, Input} from '@angular/core';
import {Pokemon, PokemonSpecies,} from '../../../../../models';

@Component({
  selector: 'app-pokemoncard',
  templateUrl: './pokemoncard.component.html',
})
export class PokemoncardComponent {
  @Input() pokemon!: PokemonSpecies & Pokemon & { pokedexId: number };
  @Input() lang: string;

  constructor() {
  }
}
