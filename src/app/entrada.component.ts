// entrada.component.ts
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'entrada',
    template: `
    <input type="text" id="producto" #inputProducto>
    <button (click)="enviarElemento(inputProducto.value)">Añadir</button>
  `
})
export class Entrada {
    @Output() nuevoElemento = new EventEmitter<string>();

    enviarElemento(valor: string) {
        this.nuevoElemento.emit(valor);
    }
}
