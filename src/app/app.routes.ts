import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReservasComponent } from './reservas/reservas.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta para la página principal
  { path: 'reservas', component: ReservasComponent } // Ruta para las reservas
];
