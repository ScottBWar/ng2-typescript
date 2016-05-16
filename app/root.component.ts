import { Component } from '@angular/core';

import { AppComponent } from './app.component';

@Component({
	selector: 'root-component',
	directives: [AppComponent],
	template: `<h1>Game1</h1>
    <my-app>Loading...</my-app>
    <h1>Game2</h1>
    <my-app>Loading...</my-app>
  `
})
export class RootComponent { }
