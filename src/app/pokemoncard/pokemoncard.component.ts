import { Component, Input, OnInit } from '@angular/core';
import { Observable, Observer, timer } from 'rxjs';
import { Pokemon, PokemonSpecies, PokemonType } from '../../models/index';
import { PokemonService } from '../services/pokemon.service';


@Component({
  selector: 'app-pokemoncard',
  templateUrl: './pokemoncard.component.html',
  
})
export class PokemoncardComponent implements OnInit {
  @Input() pokemonurl: string;
  @Input() filter: string;

  pokemon: Pokemon;
  species: PokemonSpecies;
  loaded: boolean = false;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemon(this.pokemonurl).subscribe((result) => {
      this.pokemon = result;
      this.getSpecies(this.pokemon.species.url);
    });
    timer(100).subscribe(() => (this.loaded = true));
  }
  getSpecies(url: string) {
    this.pokemonService.getSpezies(url).subscribe((result) => {
      this.species = result;
    });
  }
  isFiltered(): boolean {
    if (this.species) {
      let name =
        this.species.names.find((entry) => entry.language.name === 'de')
          ?.name ?? '';
      return (
        this.pokemon.types.find(
          (type) => type.type.name === this.filter.trim().toLowerCase()
        ) !== undefined ||
        name.toLowerCase().includes(this.filter.trim().toLowerCase())
      );
    }
    return false;
  }
}
