import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexViewComponent } from 'src/app/features/pokedex/pages/pokedex-view/pokedex-view.component';

const routes: Routes = [
  {
    path: '',
    component: PokedexViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokedexRoutingModule { }
