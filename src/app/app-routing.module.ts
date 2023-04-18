import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ComponentepruebaComponent } from './pages/componenteprueba/componenteprueba.component';
import { AlumnoDetalleComponent } from './pages/formularios/alumno-detalle/alumno-detalle.component';
import { ListadoAlumnosComponent } from './pages/listado-alumnos/listado-alumnos.component';

const routes: Routes = [
  //\pages\formularios\alumno-detalle\alumno-detalle.component
  { path: 'a', component: ComponentepruebaComponent },
  { path: 'alumnos', component: ListadoAlumnosComponent },
  { path: 'alumnos/:dni', component: AlumnoDetalleComponent },
  {
    // cualquier otra ruta que no coincida con la anteriores
    path: '**',
    redirectTo: 'dashboard',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
