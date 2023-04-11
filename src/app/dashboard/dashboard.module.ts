import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CardsModule } from '../pages/cards/cards.module';

import { ButtonsAndIconsModule } from '../pages/buttons-and-icons/buttons-and-icons.module';
import { FormulariosModule } from '../pages/formularios/formularios.module';
import { DialogosModule } from '../pages/dialogos/dialogos.module';
import { ListadoAlumnosModule } from '../pages/listado-alumnos/listado-alumnos.module';
import { AgregarAlumnoModule } from '../pages/dialogos/mis-dialogos/agregar-alumno/agregar-alumno.module';
import { ModificarAlumnoModule } from '../pages/dialogos/misdialogos/modificar-alumno/modificar-alumno.module';
import { ListarAlumnosModule } from '../pages/dialogos/misdialogos/listar-alumnos/listar-alumnos.module';
@NgModule({
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    CardsModule,
    ButtonsAndIconsModule,
    FormulariosModule,
    DialogosModule,
    AgregarAlumnoModule,
    ModificarAlumnoModule,
    ListarAlumnosModule,
  ],
})
export class DashboardModule {}
