import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FestivosService } from '../../services/festivos.service';
import { RandomUserService } from '../../services/random-user.service';

@Component({
  selector: 'app-apis',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './apis.component.html',
  styleUrl: './apis.component.scss'
})
export class ApisComponent implements OnInit{
  festivo: any;
  festivoHoy: boolean = false;
  usuario: any;
  constructor (
    private festivos : FestivosService,
    private randomUserService: RandomUserService
  ){}

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


    this.randomUserService.obtenerUsuarioAleatorio().subscribe({
      next: (data: any) => {
        this.usuario = data.results[0];
      },
      error: (error) => {
        console.error('Error al obtener un usuario aleatorio', error);
      }
    });
  }
}
