import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormulariosModule } from 'src/app/pages/formularios/formularios.module';
import { AgregarAlumnoComponent } from './agregar-alumno.component';

@NgModule({
  declarations: [AgregarAlumnoComponent],
  imports: [CommonModule, FormulariosModule],
  exports: [AgregarAlumnoComponent],
})
export class AgregarAlumnoModule {}
