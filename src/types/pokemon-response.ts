import { NamedAPIResource } from '../models/Common';

export interface PokemonRexponse {
    count: number,
    next: string,
    previous: string,
    results: NamedAPIResource[]
}

export interface PokedexResponse {
    count: number,
    next: string,
    previous: string,
    results: NamedAPIResource[]
}