import { Component, ViewChild, ElementRef } from '@angular/core';
import { Curso } from '../../models/curso.mode';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-crear-cursos',
  standalone: true,
  imports: [CommonModule, FormsModule], // Asegúrate de que todos los módulos que uses estén importados
  templateUrl: './crear-cursos.component.html',
  styleUrls: ['./crear-cursos.component.scss']
})
export class CrearCursosComponent {
  @ViewChild('nombreCurso') nombreCurso! : ElementRef;
  @ViewChild('nombreInstructor') nombreInstructor! : ElementRef;
  @ViewChild('fechaIncio') fechaIncio! : ElementRef;
  @ViewChild('fechaFinal') fechaFinal! : ElementRef;
  @ViewChild('descripcion') descripcion! : ElementRef;
  @ViewChild('error') error! : ElementRef;

  constructor(private cursoService: CursosService) {}
  
  agregarCurso() {
    const nombreIngresado = this.nombreCurso.nativeElement.value;
    const nombreInstructorIngresado = this.nombreInstructor.nativeElement.value;
    const fechaInicioIngresado = this.fechaIncio.nativeElement.value;
    const fechaFinalIngresado = this.fechaFinal.nativeElement.value;
    const descripcionIngresada = this.descripcion.nativeElement.value;
    const fechaInicio = new Date(fechaInicioIngresado);
    const fechaFinal = new Date(fechaFinalIngresado);
    const duracion = this.calcularDuracion(fechaInicio, fechaFinal);

    let curso = new Curso(nombreIngresado, nombreInstructorIngresado, fechaInicio, fechaFinal, descripcionIngresada, duracion);

    const error = this.validarFormulario(curso);

    if (error) {
      this.mostrarError(error);
      return;
    }

    this.cursoService.agregarCurso(curso);
    this.resetearValores();
  }

  calcularDuracion(fechaInicio: Date, fechaFinal: Date): number {
    const tiempoInicio = fechaInicio.getTime();
    const tiempoFinal = fechaFinal.getTime();
    const diferencia = tiempoFinal - tiempoInicio;
    const dias = diferencia / (1000 * 60 * 60 * 24);
    return dias;
  }


  resetearValores(){
    this.nombreCurso.nativeElement.value = '';
    this.nombreInstructor.nativeElement.value = '';
    this.fechaIncio.nativeElement.value = '';
    this.fechaFinal.nativeElement.value = '';
    this.descripcion.nativeElement.value = '';
  }

  validarFormulario(curso: Curso): string | null {
    const hoy = new Date().toISOString().split('T')[0];

    const { nombre, instructor, fechaInicio, fechaFin, descripcion } = curso;

    if (!nombre || !instructor || !fechaInicio || !fechaFin || !descripcion) {
        return "Todos los campos son obligatorios.";
    }

    const fechaInicioDate = new Date(fechaInicio);
    const fechaFinDate = new Date(fechaFin);
    const hoyDate = new Date(hoy);

    if (isNaN(fechaInicioDate.getTime()) || isNaN(fechaFinDate.getTime())) {
      return "Las fechas ingresadas no son válidas.";
    }

    if (fechaInicioDate < hoyDate) {
        return "La fecha de inicio debe ser hoy o una fecha futura.";
    }

    if (fechaFinDate <= fechaInicioDate) {
        return "La fecha de fin debe ser posterior a la fecha de inicio.";
    }

    if (descripcion.length < 30) {
        return "La descripción debe tener al menos 30 caracteres.";
    }

    return null;
  }

  mostrarError(error : string){
    this.error.nativeElement.textContent = error;
    this.error.nativeElement.style.display = 'block';
    setTimeout(() => {
      this.error.nativeElement.textContent = '';
      this.error.nativeElement.style.display = 'none';
    }, 5000);
  }



}