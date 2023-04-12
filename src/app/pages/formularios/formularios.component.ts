import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Alumno } from '../listado-alumnos/listado-alumnos.component';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.scss'],
})
export class FormulariosComponent {
  constructor(
    private service: LocalStorageService,
    private dialog: MatDialogRef<FormulariosComponent>
  ) {}

  nombreControl = new FormControl('', Validators.required);
  apellidoControl = new FormControl('', Validators.required);
  dniControl = new FormControl('', [
    Validators.required,
    Validators.minLength(1),
  ]);
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  paisControl = new FormControl('', Validators.required);

  FormularioRegistro = new FormGroup({
    nombre: this.nombreControl,
    apellido: this.apellidoControl,
    dni: this.dniControl,
    email: this.emailControl,
    pais: this.paisControl,
  });

  agregar() {
    if (this.FormularioRegistro.status === 'INVALID') return;

    let alumno = {
      nombre: this.FormularioRegistro.get('nombre')?.value,
      apellido: this.FormularioRegistro.get('apellido')?.value,
      dni: this.FormularioRegistro.get('dni')?.value,
      email: this.FormularioRegistro.get('email')?.value,
      pais: this.FormularioRegistro.get('pais')?.value,
    };

    if (this.service.obtenerAlumno(+alumno.dni!)!.dni === +alumno.dni!) return;

    this.service.agregarAlumno(alumno);
    this.dialog.close();
  }
}
