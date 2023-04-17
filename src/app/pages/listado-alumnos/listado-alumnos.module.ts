import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { ListadoAlumnosComponent } from './listado-alumnos.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';
@NgModule({
  declarations: [ListadoAlumnosComponent],
  imports: [
    CommonModule,
    MatTableModule,
    SharedModule,
    DirectivesModule,
    PipesModule,
  ],
  exports: [ListadoAlumnosComponent],
})
export class ListadoAlumnosModule {}
