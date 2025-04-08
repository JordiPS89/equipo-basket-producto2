import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JugadorFiltroPipe } from '../../pipes/jugador-filtro.pipe';
import { DetailComponent } from '../detail/detail.component';
import { FirebaseService } from '../../firebase.service';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule, DetailComponent, FormsModule, JugadorFiltroPipe],
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  filtroNombre: string = '';
  filtroEdad: string = '';
  filtroPosicion: string = '';

  jugadores: any[] = [];
  jugadorSeleccionado: any = null;

  constructor(private readonly firebaseService: FirebaseService) {}

  ngOnInit(): void {
    this.firebaseService.getPlayers().subscribe(data => {
      this.jugadores = data;
      console.log('Jugadores desde Firebase:', data);
    });
  }

  seleccionarJugador(jugador: any) {
    this.jugadorSeleccionado = jugador;
  }

  nuevoJugador() {
    const jugador = {
      nombre: 'Nuevo',
      apellidos: 'Jugador',
      edad: 20,
      equipo: 'Equipo Demo',
      posicion: 'Base',
      foto: 'assets/jugadores/demo.jpg',
      video: 'assets/videos/demo.mp4'
    };

    this.firebaseService.addPlayer(jugador).then(() => {
      console.log('Jugador añadido');
    });
  }
}
