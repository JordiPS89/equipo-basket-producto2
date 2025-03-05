import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail',
  standalone: true,  //Necesario si usas Angular standalone
  imports: [CommonModule], //Importamos CommonModule para *ngIf
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  @Input() jugador: any;
}
