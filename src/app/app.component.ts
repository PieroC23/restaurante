import { Component } from '@angular/core';

// Importa los componentes de manera standalone
import { MenuInteractivoComponent } from './menu-interactivo/menu-interactivo.component';
import { ReservasComponent } from './reservas/reservas.component';
import { ContactoUbicacionComponent } from './contacto-ubicacion/contacto-ubicacion.component';

@Component({
  selector: 'app-root',
  standalone: true,  // Este es un componente independiente
  imports: [MenuInteractivoComponent, ReservasComponent, ContactoUbicacionComponent],  // Agrupamos ambos en un solo array
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'La Sazón de Rosita';
}
