import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogosComponent } from './dialogos.component';
import { MatButtonModule } from '@angular/material/button';
//import { UsuariosDialogoComponent } from './mis-dialogos/usuarios-dialogo/usuarios-dialogo.component';

import { MatDialogModule } from '@angular/material/dialog';
//import { AgregarAlumnoComponent } from './mis-dialogos/agregar-alumno/agregar-alumno.component';
import { FormulariosModule } from '../formularios/formularios.module';
import { ListadoAlumnosModule } from '../listado-alumnos/listado-alumnos.module';
import { FormulariosModificacionModule } from '../formularios-modificacion/formularios-modificacion.module';

@NgModule({
  declarations: [
    DialogosComponent,

    // AgregarAlumnoComponent,
  ],
  exports: [DialogosComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    FormulariosModule,
    ListadoAlumnosModule,
    FormulariosModificacionModule,
  ],
})
export class DialogosModule {}
