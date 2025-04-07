import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Importar AngularFire y Firebase
import { AngularFireModule } from '@angular/fire/compat'; // Asegúrate de usar la versión compatible
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'; // Para Firestore
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), // Inicializa Firebase
    AngularFirestoreModule // Importa Firestore
  ],
  providers: []
})
export class AppModule { }

