import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModificarAlumnoComponent } from './modificar-alumno.component';
import { FormulariosModule } from 'src/app/pages/formularios/formularios.module';
import { FormulariosModificacionComponent } from 'src/app/pages/formularios-modificacion/formularios-modificacion.component';
import { FormulariosModificacionModule } from 'src/app/pages/formularios-modificacion/formularios-modificacion.module';

@NgModule({
  declarations: [ModificarAlumnoComponent],
  imports: [CommonModule, FormulariosModificacionModule],
  exports: [ModificarAlumnoComponent],
})
export class ModificarAlumnoModule {}
