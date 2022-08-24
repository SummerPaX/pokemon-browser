import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewNotfoundComponent } from './view-notfound/view-notfound.component';

const routes: Routes = [
  {
    path: 'pokedex/:id',
    loadChildren: () =>
      import('./features/pokedex/pokedex.module').then((m) => m.PokedexModule),
  },
  { path: '**', component: ViewNotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
