import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';
import { PlayerService } from '../../services/player.service';
import { Player } from '../../models/player.model';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule, FormsModule, SafeUrlPipe],
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players: Player[] = [];
  nuevoJugador: Partial<Player> = {};
  jugadorSeleccionado: Player | null = null;

  constructor(private playerService: PlayerService) {}
  
  ngOnInit(): void {
    this.playerService.getPlayers().subscribe((data: any[]) => {
      console.log('Jugadores recibidos:', data);
      this.players = data;
    });
  }
  

  addPlayer(): void {
    if (!this.nuevoJugador.nombre || !this.nuevoJugador.apellido) return;

    const id = this.generateId();
    const player: Player = {
      id,
      nombre: this.nuevoJugador.nombre,
      apellido: this.nuevoJugador.apellido,
      edad: this.nuevoJugador.edad || 0,
      altura: this.nuevoJugador.altura || 0,
      posicion: this.nuevoJugador.posicion || '',
      equipo: this.nuevoJugador.equipo || '',
      foto: this.nuevoJugador.foto || '',
      video: this.nuevoJugador.video || ''
    };

    this.playerService.addPlayer(id, player).then(() => {
      this.nuevoJugador = {};
    });
  }

  eliminarJugador(id: string | undefined): void {
    if (!id) return;
    this.playerService.deletePlayer(id).then(() => {
      console.log(`Jugador eliminado: ${id}`);
    });
  }

  seleccionarJugador(player: Player): void {
    this.jugadorSeleccionado = { ...player };
  }

  updateJugador(): void {
    if (this.jugadorSeleccionado?.id) {
      this.playerService
        .updatePlayer(this.jugadorSeleccionado.id, this.jugadorSeleccionado)
        .then(() => {
          console.log('Jugador actualizado');
          this.jugadorSeleccionado = null;
        });
    }
  }

  private generateId(): string {
    return Math.random().toString(36).substring(2, 10);
  }
}
