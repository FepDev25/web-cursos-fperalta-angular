import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CrearCursosComponent } from './components/crear-cursos/crear-cursos.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListadoCursosComponent } from './components/listado-cursos/listado-cursos.component';
import { FormsModule } from '@angular/forms';
import { ApisComponent } from './components/apis/apis.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ContactoComponent, CrearCursosComponent, FooterComponent, ListadoCursosComponent, FormsModule, ApisComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'web-cursos-angular-fperalta';
}

// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1