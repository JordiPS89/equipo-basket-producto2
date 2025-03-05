import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jugadorFiltro',
  standalone: true
})
export class JugadorFiltroPipe implements PipeTransform {
  transform(jugadores: any[], filtro: string): any[] {
    if (!jugadores || !filtro) {
      return jugadores;
    }
    return jugadores.filter(jugador =>
      jugador.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
      jugador.posicion.toLowerCase().includes(filtro.toLowerCase())
    );
  }
}
