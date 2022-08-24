import { Pipe, PipeTransform } from '@angular/core';
import { PokemonSpecies } from 'src/models';

@Pipe({
  name: 'species',
})
export class SpeciesPipe implements PipeTransform {
  transform(
    value: PokemonSpecies,
    property: 'flavour' | 'name',
    lang: string
  ): unknown {

    switch (property) {
      case 'flavour':
        return (
          value.flavor_text_entries.find(
            (entry) => entry.language.name === lang
          )?.flavor_text.replace('\f',' ') ?? ''
        );

      case 'name':
        return (
          value.names.find((entry) => entry.language.name === lang)?.name ?? ''
        );
    }

    return;
  }
}
