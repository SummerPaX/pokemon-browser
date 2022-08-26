import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokedexRoutingModule } from './pokedex-routing.module';
import { PokedexViewComponent } from 'src/app/features/pokedex/pages/pokedex-view/pokedex-view.component';
import { ViewNotfoundComponent } from 'src/app/view-notfound/view-notfound.component';
import { PokemoncardComponent } from './components/pokemoncard/pokemoncard.component';
import { SimplepokemoncardComponent } from './components/simplepokemoncard/simplepokemoncard.component';
import { SpeciesPipe } from './pipes/species.pipe';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({
  declarations: [
    PokedexViewComponent,
    PokemoncardComponent,
    SimplepokemoncardComponent,
    ViewNotfoundComponent,
    SpeciesPipe,
  ],
    imports: [
        CommonModule,
        PokedexRoutingModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        MatMenuModule,
        FormsModule,
        MatProgressSpinnerModule,
    ]
})
export class PokedexModule { }
