import { NamedAPIResource } from '../Common';

/**
 * Catalogued pokémon for pokedex
 */
export interface PokemonEntry {
  /** The index of this Pokémon pokemon entry within the Pokédex */
  entry_number: number;
  /** The Pokémon pokemon being encountered */
  pokemon_species: NamedAPIResource;
}
