import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';  // Importa Firestore
import { Observable } from 'rxjs';  // Para manejar los datos como un observable

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private readonly firestore: AngularFirestore) { }

  // Método para obtener todos los jugadores
  getPlayers(): Observable<any[]> {
    // Obtén todos los documentos de la colección 'players'
    return this.firestore.collection('players').valueChanges();
  }

  // Método para agregar un nuevo jugador
  addPlayer(player: any): Promise<void> {
    // Crea un nuevo documento en la colección 'players' con un id único
    const id = this.firestore.createId();
    return this.firestore.collection('players').doc(id).set(player);
  }
}
