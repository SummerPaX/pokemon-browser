import { Component, Input, OnInit } from '@angular/core';
import { Pokemon, PokemonEntry, PokemonSpecies, PokemonType } from '../../models/index';
import { PokemonService } from '../services/pokemon.service';



@Component({
  selector: 'app-simplepokemoncard',
  templateUrl: './simplepokemoncard.component.html'
})
export class SimplepokemoncardComponent implements OnInit {

  @Input() pokemonEntry: PokemonEntry;
  @Input() filter: string;
  @Input() lang: string;

  pokemon: Pokemon;
  species: PokemonSpecies;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getSpezies(this.pokemonEntry.pokemon_species.url).subscribe((result) => {
      this.species = result;
      this.getPokemon(this.species.varieties.find((entry)=> entry.is_default)?.pokemon.url || '');
    });
  }
  getPokemon(url: string) {
    this.pokemonService.getPokemon(url).subscribe((result) => {
      this.pokemon = result;
    });
  }
  
  isFiltered(): boolean {
    if (this.species) {
      let name =
        this.species.names.find((entry) => entry.language.name === (this.lang || 'de'))
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
