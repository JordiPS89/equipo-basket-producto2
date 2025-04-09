import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, addDoc, doc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private firestore: Firestore) {}

  getPlayers(): Observable<any[]> {
    const playersRef = collection(this.firestore, 'players');
    return collectionData(playersRef, { idField: 'id' });
  }

  addPlayer(player: any): Promise<any> {
    const playersRef = collection(this.firestore, 'players');
    return addDoc(playersRef, player);
  }

  deletePlayer(id: string): Promise<void> {
    const docRef = doc(this.firestore, `players/${id}`);
    return deleteDoc(docRef);
  }

  updatePlayer(id: string, datos: any): Promise<void> {
    const docRef = doc(this.firestore, `players/${id}`);
    return updateDoc(docRef, datos);
  }
}


