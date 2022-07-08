import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar class=""></app-navbar>
    <div class="h-20"></div>    
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {

  constructor() {}

  title = 'pokemon-browser';
}
