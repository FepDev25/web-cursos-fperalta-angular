import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CrearCursosComponent } from './components/crear-cursos/crear-cursos.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListadoCursosComponent } from './components/listado-cursos/listado-cursos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InicioComponent, ContactoComponent, CrearCursosComponent, FooterComponent, ListadoCursosComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'web-cursos-angular-fperalta';
}

// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1