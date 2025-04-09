import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MediaComponent } from '../media/media.component';
import { FirebaseService } from '../../firebase.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, MediaComponent, FormsModule],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  @Input() jugador: any;
  modoEdicion: boolean = false;

  constructor(private firebaseService: FirebaseService) {}

  cerrarModal() {
    this.jugador = null;
  }

  guardarCambios() {
    if (!this.jugador.id) {
      alert('No se puede guardar: falta el ID del jugador');
      return;
    }

    this.firebaseService.updatePlayer(this.jugador.id, this.jugador)
      .then(() => {
        console.log('Jugador actualizado');
        this.modoEdicion = false;
      })
      .catch(err => {
        console.error('Error al actualizar:', err);
      });
  }
}


