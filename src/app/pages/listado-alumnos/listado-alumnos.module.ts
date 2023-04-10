import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [ListadoAlumnosComponent],
  imports: [CommonModule, MatTableModule],
  exports: [ListadoAlumnosComponent],
})
export class ListadoAlumnosModule {}
