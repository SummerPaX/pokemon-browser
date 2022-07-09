import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewFirstgenComponent } from './view-firstgen/view-firstgen.component';
import { ViewNotfoundComponent } from './view-notfound/view-notfound.component';
import { ViewSecondgenComponent } from './view-secondgen/view-secondgen.component';

const routes: Routes = [
  { path: 'first', component: ViewFirstgenComponent },
  { path: 'second', component: ViewSecondgenComponent },
  { path: '', component: ViewFirstgenComponent },
  { path: '**', component: ViewNotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
