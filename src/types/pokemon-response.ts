import { NamedAPIResource } from '../models/Common';

export interface PokemonRexponse {
    count: number,
    next: string,
    previous: string,
    results: NamedAPIResource[]
}