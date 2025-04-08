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

  mostrarFormulario: boolean = false;

  nuevo = {
    nombre: '',
    apellidos: '',
    edad: null,
    equipo: '',
    posicion: '',
    foto: '',
    video: ''
  };

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

  cancelarNuevo() {
    this.mostrarFormulario = false;
    this.nuevo = {
      nombre: '',
      apellidos: '',
      edad: null,
      equipo: '',
      posicion: '',
      foto: '',
      video: ''
    };
  }

  guardarNuevoJugador() {
    if (!this.nuevo.nombre || !this.nuevo.apellidos) {
      alert('Nombre y apellidos son obligatorios');
      return;
    }

    this.firebaseService.addPlayer(this.nuevo).then(() => {
      console.log('Jugador añadido con éxito');
      this.cancelarNuevo();
    });
  }
}
