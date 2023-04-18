import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { Observable } from 'rxjs';
import { Alumno } from '../../listado-alumnos/listado-alumnos.component';

@Component({
  selector: 'app-alumno-detalle',
  templateUrl: './alumno-detalle.component.html',
  styleUrls: ['./alumno-detalle.component.scss'],
})
export class AlumnoDetalleComponent {
  //OBSERVABLE
  alumno$: Observable<Alumno | null>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private alumnosService: AlumnosService
  ) {
    const alumnoId = Number(this.activatedRoute.snapshot.params['dni']);

    this.alumno$ = this.alumnosService.obtenerAlumnoPordni(alumnoId);
  }

  // alumno$?: Alumno;

  // constructor(
  //   private activatedRoute: ActivatedRoute,
  //   private alumnosService: AlumnosService
  // ) {
  //   const alumnoDni = Number(this.activatedRoute.snapshot.params['dni']);

  //   console.log(alumnoDni);
  //   this.alumnosService.obtenerAlumnoPordni(alumnoDni).subscribe({
  //     next: (res) => {
  //       this.alumno$ = res;
  //       console.log(res);
  //     },
  //     error: (err) => console.log(err),
  //   });
  // }
}
