import { Routes } from '@angular/router';
import { ListadoCursosComponent } from './components/listado-cursos/listado-cursos.component';
import { CrearCursosComponent } from './components/crear-cursos/crear-cursos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ApisComponent } from './components/apis/apis.component';
import { InicioComponent } from './components/inicio/inicio.component';


export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'listadocursos', component: ListadoCursosComponent },
  { path: 'crearcurso', component: CrearCursosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'apis', component: ApisComponent }
];