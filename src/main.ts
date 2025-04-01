import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JugadorFiltroPipe } from './app/pipes/jugador-filtro.pipe';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(FormsModule, JugadorFiltroPipe)]
});
