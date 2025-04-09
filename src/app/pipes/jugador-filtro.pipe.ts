import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jugadorFiltro',
  standalone: true
})
export class JugadorFiltroPipe implements PipeTransform {
  transform(jugadores: any[], filtroName: string,filtroEdad: string, filtroPosicion: string): any[] {
    if (!jugadores) {
      return jugadores;
    }
    let resultados = jugadores;
    if (filtroName.trim() !== '') {
      const filtro = filtroName.toLowerCase();
      resultados = resultados.filter(jugador =>
        jugador.nombre.toLowerCase().includes(filtro) ||
        jugador.apellidos.toLowerCase().includes(filtro)
      );
    }
    if (filtroEdad.trim() !== '') {
      const edadNumero = parseInt(filtroEdad, 10);
      resultados = resultados.filter(jugador =>
        jugador.edad === edadNumero
      );
    }
    if(filtroPosicion != ''){
      filtroPosicion = filtroPosicion.toLowerCase();
      resultados= resultados.filter(jugador =>
        jugador.posicion.toLowerCase().includes(filtroPosicion));
    }

    return resultados;
  }
}
