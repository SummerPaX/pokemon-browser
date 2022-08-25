import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject, takeUntil} from 'rxjs';
import {Pokemon, PokemonSpecies} from '../../../../../models';
import {PokemonService} from '../../services/pokemon.service';

@Component({
  selector: 'app-simplepokemoncard',
  templateUrl: './simplepokemoncard.component.html',
})
export class SimplepokemoncardComponent implements OnInit, OnDestroy {
  @Input() species!: PokemonSpecies;
  pokemon$: Observable<Pokemon>
  pokemon: Pokemon;
  @Input() filter: string;
  @Input() lang: string;

  destroy$ = new Subject<any>();

  constructor(private pokemonService: PokemonService) {
  }

  ngOnDestroy(): void {
    this.destroy$.next(0)
    this.destroy$.complete()
  }

  ngOnInit(): void {
    this.pokemon$ = this.pokemonService.getPokemon(
      this.species?.varieties.find(
        (entry) =>
          entry.is_default)?.pokemon || {name: '', url: ''}
    );
    this.pokemon$.pipe(takeUntil(this.destroy$)).subscribe(pokemon => this.pokemon = pokemon);
  }


  isFiltered() {
    if (this.species) {
      let name =
        this.species.names.find(
          (entry) => entry.language.name === (this.lang || 'de')
        )?.name ?? '';
      return (
        this.pokemon?.types.find(
          (type) => type.type.name === this.filter.trim().toLowerCase()
        ) !== undefined ||
        name.toLowerCase().includes(this.filter.trim().toLowerCase())
      );
    }
    return false;
  }
}
