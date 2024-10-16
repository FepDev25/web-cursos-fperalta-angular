import { Injectable } from '@angular/core';
import { Curso } from '../models/curso.mode';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  private cursos: Curso[] = [];

  constructor() {
    if (this.estaEnElNavegador()) {
      this.cargarCursos();
    }
  }

  private estaEnElNavegador(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }

  public guardarCursos(): void {
    if (this.estaEnElNavegador()) {
      localStorage.setItem('cursos', JSON.stringify(this.cursos));
    }
  }

  private cargarCursos(): void {
    if (this.estaEnElNavegador()) {
      const cursosGuardados = localStorage.getItem('cursos');
      if (cursosGuardados) {
        this.cursos = JSON.parse(cursosGuardados);
      }
    }
  }

  agregarCurso(curso: Curso) {
    this.cursos.push(curso);
    this.guardarCursos();
  }

  obtenerCursos(): Curso[] {
    return this.cursos;
  }
}
