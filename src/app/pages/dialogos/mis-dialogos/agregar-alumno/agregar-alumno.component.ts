import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-agregar-alumno',
  templateUrl: './agregar-alumno.component.html',
  styleUrls: ['./agregar-alumno.component.scss'],
})
export class AgregarAlumnoComponent {
  tipo!: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.tipo = data.type;
  }
}
