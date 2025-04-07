import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, deleteDoc, setDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Player } from '../models/player.model';

@Injectable({ providedIn: 'root' })
export class PlayerService {
  constructor(private firestore: Firestore) {}

  getPlayers(): Observable<Player[]> {
    const playersRef = collection(this.firestore, 'players');
    return collectionData(playersRef, { idField: 'id' }) as Observable<Player[]>;
  }

  addPlayer(id: string, data: Player) {
    const docRef = doc(this.firestore, `players/${id}`);
    return setDoc(docRef, data);
  }

  deletePlayer(id: string) {
    const docRef = doc(this.firestore, `players/${id}`);
    return deleteDoc(docRef);
  }

  updatePlayer(id: string, data: Partial<Player>) {
    const docRef = doc(this.firestore, `players/${id}`);
    return updateDoc(docRef, data);
  }
}
