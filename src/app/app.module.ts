import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemoncardComponent } from './pokemoncard/pokemoncard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewFirstgenComponent } from './view-firstgen/view-firstgen.component';
import { ViewSecondgenComponent } from './view-secondgen/view-secondgen.component';
import { ViewNotfoundComponent } from './view-notfound/view-notfound.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SpeciesPipe } from './species.pipe';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { SimplepokemoncardComponent } from './simplepokemoncard/simplepokemoncard.component';
import { MatMenuModule } from '@angular/material/menu';
@NgModule({
  declarations: [
    AppComponent,
    PokemoncardComponent,
    SimplepokemoncardComponent,
    NavbarComponent,
    ViewFirstgenComponent,
    ViewSecondgenComponent,
    ViewNotfoundComponent,
    SpeciesPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
