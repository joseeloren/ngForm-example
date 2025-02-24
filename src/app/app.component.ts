// app.component.ts
import { Component } from '@angular/core';
import { Lista } from './lista.component';
import { Entrada } from './entrada.component';

@Component({
  selector: 'app-root',
  imports: [Lista, Entrada],
  template: `
    <lista [items]="items"></lista>
    <entrada (nuevoElemento)="addItem($event)"></entrada>
  `
})
export class AppComponent {
  title = 'ngform-example';
  items: string[] = [];

  addItem(item: string) {
    this.items.push(item);
  }
}
