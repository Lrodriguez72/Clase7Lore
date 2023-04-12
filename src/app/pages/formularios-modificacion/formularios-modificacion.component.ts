import { Component, Inject, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-formularios-modificacion',
  templateUrl: './formularios-modificacion.component.html',
  styleUrls: ['./formularios-modificacion.component.scss'],
})
export class FormulariosModificacionComponent {
  constructor(
    private service: LocalStorageService,
    private dialog: MatDialogRef<FormulariosModificacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(this.data);
  }

  nombreControl = new FormControl('', Validators.required);
  apellidoControl = new FormControl('', Validators.required);
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  paisControl = new FormControl('', Validators.required);

  FormularioRegistro = new FormGroup({
    nombre: this.nombreControl,
    apellido: this.apellidoControl,
    email: this.emailControl,
    pais: this.paisControl,
  });

  modificar() {
    if (this.FormularioRegistro.status === 'INVALID') return;

    let alumnoModificar = {
      nombre: this.FormularioRegistro.get('nombre')?.value,
      apellido: this.FormularioRegistro.get('apellido')?.value,
      dni: this.data.dni,
      email: this.FormularioRegistro.get('email')?.value,
      pais: this.FormularioRegistro.get('pais')?.value,
    };

    if (
      this.service.obtenerAlumno(alumnoModificar.dni!)!.dni ===
      alumnoModificar.dni!
    )
      return;

    this.service.modificarAlumno(alumnoModificar);
    this.dialog.close();
  }
}
