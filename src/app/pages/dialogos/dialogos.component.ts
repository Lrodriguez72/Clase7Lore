import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AgregarAlumnoComponent } from './mis-dialogos/agregar-alumno/agregar-alumno.component';
import { ListarAlumnosComponent } from './misdialogos/listar-alumnos/listar-alumnos.component';
import { ModificarAlumnoComponent } from './misdialogos/modificar-alumno/modificar-alumno.component';

@Component({
  selector: 'app-dialogos',
  templateUrl: './dialogos.component.html',
  styleUrls: ['./dialogos.component.scss'],
})
export class DialogosComponent {
  constructor(private dialogoService: MatDialog) {}
  abrirDialogo(type: string): void {
    if (type === 'agregar') {
      this.dialogoService.open(AgregarAlumnoComponent);
    }
    if (type === 'modificar') {
      this.dialogoService.open(ModificarAlumnoComponent);
    }
    if (type === 'listado') {
      this.dialogoService.open(ListarAlumnosComponent);
    }
  }
}
