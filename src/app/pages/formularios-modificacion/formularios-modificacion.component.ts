import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formularios-modificacion',
  templateUrl: './formularios-modificacion.component.html',
  styleUrls: ['./formularios-modificacion.component.scss'],
})
export class FormulariosModificacionComponent {
  nombreControl = new FormControl('', Validators.required);
  apellidoControl = new FormControl('', Validators.required);
  dniControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  paisControl = new FormControl('', Validators.required);

  FormularioRegistro = new FormGroup({
    nombre: this.nombreControl,
    apellido: this.apellidoControl,
    dniControl: this.dniControl,
    emailControl: this.emailControl,
    paisControl: this.paisControl,
  });
}
