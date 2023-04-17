import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { ListadoAlumnosComponent } from './listado-alumnos.component';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';

@NgModule({
  declarations: [ListadoAlumnosComponent],
  imports: [
    CommonModule,
    MatTableModule,
    DirectivesModule,
    PipesModule,
    SharedModule,
  ],
  exports: [ListadoAlumnosComponent],
})
export class ListadoAlumnosModule {}
