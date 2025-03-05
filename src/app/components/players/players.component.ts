import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from '../detail/detail.component';
import { JUGADORES } from '../../data/jugadores';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
  standalone: true,
  imports: [CommonModule, DetailComponent]
})
export class PlayersComponent {
  jugadores = JUGADORES;
  jugadorSeleccionado: any = null;

  seleccionarJugador(jugador: any) {
    this.jugadorSeleccionado = jugador;
  }
}
