// lista.component.ts
import { Component, Input } from '@angular/core';

@Component({
    selector: 'lista',
    template: `
    <ul>
    @for (item of items; track item) {
        <li>{{item}}</li>
    }
    </ul>
  `
})
export class Lista {
    @Input() items: string[] = [];
}
