import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.scss'],
})
export class FormulariosComponent {
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
