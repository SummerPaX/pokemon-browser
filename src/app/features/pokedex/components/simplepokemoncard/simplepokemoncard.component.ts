import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {Pokemon, PokemonSpecies} from '../../../../../models';

@Component({
  selector: 'app-simplepokemoncard',
  templateUrl: './simplepokemoncard.component.html',
})
export class SimplepokemoncardComponent {
  @Input() pokemon!: PokemonSpecies & Pokemon & { pokedexId: number };
  @Input() lang: string;

  constructor() {
  }
}
