import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { ListadoAlumnosComponent } from './listado-alumnos.component';
import { DirectivesModule } from 'src/app/directives/directives.module';

@NgModule({
  declarations: [ListadoAlumnosComponent],
  imports: [CommonModule, MatTableModule, DirectivesModule],
  exports: [ListadoAlumnosComponent],
})
export class ListadoAlumnosModule {}
