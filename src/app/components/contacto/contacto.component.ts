import { Component, OnInit } from '@angular/core';
import { FestivosService } from '../../services/festivos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.scss'
})
export class ContactoComponent implements OnInit{
  festivo: any;
  festivoHoy: boolean = false;
  constructor (private festivos : FestivosService){}

  ngOnInit(): void {
    this.festivos.esDiaFestivo('AT').subscribe({
      next: (data: boolean) => {
        this.festivoHoy = data;
      },
      error: (error) => {
        console.error('Error al verificar si hoy es festivo', error);
      }
    });

    this.festivos.obtenerDiasFestivos(2024, 'EC').subscribe({
      next: (data: any) => {
        this.festivo = data;
      },
      error: (error) => {
        console.error('Error al obtener los días festivos', error);
      }
    });
  }
}
