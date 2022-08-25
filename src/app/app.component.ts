import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="fixed top-0 m-2 z-10">
      <button mat-mini-fab (click)="drawer.toggle()">
        <mat-icon>menu</mat-icon>
      </button>
    </div>
    <mat-drawer-container class=" h-screen" [hasBackdrop]="true">
      <mat-drawer class="w-96 pl-14 z-50 scrollbar" #drawer mode="over">
        <app-navbar (close)="drawer.toggle()"></app-navbar>
      </mat-drawer>
      <mat-drawer-content>
        <router-outlet></router-outlet>
      </mat-drawer-content>
    </mat-drawer-container>
  `,
})
export class AppComponent {
  constructor() {}

  title = 'species-browser';
}
