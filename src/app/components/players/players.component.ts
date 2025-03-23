import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from '../detail/detail.component';
import { FormsModule } from '@angular/forms';
import { JUGADORES } from '../../data/jugadores';
import { JugadorFiltroPipe } from '../../pipes/jugador-filtro.pipe';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule, DetailComponent, FormsModule, JugadorFiltroPipe],
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent {
  filtro: string = '';
  jugadores = JUGADORES;
  jugadorSeleccionado: any = null;
  seleccionarJugador(jugador: any) {
    this.jugadorSeleccionado = jugador;
  }



  
}
