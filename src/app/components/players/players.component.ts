import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from '../detail/detail.component';
import { FormsModule } from '@angular/forms';
import { JugadorFiltroPipe } from '../../pipes/jugador-filtro.pipe';
import { JUGADORES } from '../../data/jugadores';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule, DetailComponent, FormsModule, JugadorFiltroPipe], // Importando módulos necesarios
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent {
  filtro: string = ''; // Variable de filtro
  jugadores = JUGADORES; // Lista de jugadores
  jugadorSeleccionado: any = null; // Jugador seleccionado

  seleccionarJugador(jugador: any) {
    this.jugadorSeleccionado = jugador;
  }
}
