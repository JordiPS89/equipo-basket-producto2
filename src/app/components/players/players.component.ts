import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule], // Importar CommonModule para usar *ngFor
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent {
  jugadores = [
    { nombre: 'Jugador 1', posicion: 'Base', edad: 25 },
    { nombre: 'Jugador 2', posicion: 'Escolta', edad: 27 },
    { nombre: 'Jugador 3', posicion: 'Alero', edad: 22 },
    { nombre: 'Jugador 4', posicion: 'Ala-Pívot', edad: 30 },
    { nombre: 'Jugador 5', posicion: 'Pívot', edad: 28 }
  ];
}
