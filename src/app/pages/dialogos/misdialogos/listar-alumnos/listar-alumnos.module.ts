import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarAlumnosComponent } from './listar-alumnos.component';
import { ListadoAlumnosModule } from 'src/app/pages/listado-alumnos/listado-alumnos.module';

@NgModule({
  declarations: [ListarAlumnosComponent],
  imports: [CommonModule, ListadoAlumnosModule],
  exports: [ListarAlumnosComponent],
})
export class ListarAlumnosModule {}
