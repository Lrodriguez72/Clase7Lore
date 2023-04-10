import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModificarAlumnoComponent } from './modificar-alumno.component';
import { FormulariosModule } from 'src/app/pages/formularios/formularios.module';

@NgModule({
  declarations: [ModificarAlumnoComponent],
  imports: [CommonModule, FormulariosModule],
  exports: [ModificarAlumnoComponent],
})
export class ModificarAlumnoModule {}
