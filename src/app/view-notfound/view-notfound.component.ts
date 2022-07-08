import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-notfound',
  template: `
    <div class="flex h-screen w-screen items-center justify-center">
      <p class="text-4xl pb-96">404 Page not Found!</p>
    </div>
  `,
})
export class ViewNotfoundComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
