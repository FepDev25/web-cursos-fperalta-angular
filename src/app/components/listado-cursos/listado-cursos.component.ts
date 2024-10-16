import { Component, NgModule, OnInit } from '@angular/core';
import { Curso } from '../../models/curso.mode';
import { CommonModule } from '@angular/common';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-listado-cursos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado-cursos.component.html',
  styleUrl: './listado-cursos.component.scss'
})
export class ListadoCursosComponent implements OnInit {
  cursos : Curso[] = [];

  constructor(private cursoService: CursosService) {}

  ngOnInit() {
    this.cursos = this.cursoService.obtenerCursos();
    this.cursos.forEach(curso => curso.mostrarDescripcion = false);
  }

  mostrarDescripcion(curso: Curso): void {
    curso.mostrarDescripcion = !curso.mostrarDescripcion;
  }

  eliminarCurso(curso: Curso): void {
    const index = this.cursos.findIndex(c => c.id === curso.id);
    if (index > -1) {
      this.cursos.splice(index, 1);
      this.cursoService.guardarCursos();
    }
  }
  
}
