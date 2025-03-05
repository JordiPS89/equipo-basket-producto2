import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jugadorFiltro'
})
export class JugadorFiltroPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
