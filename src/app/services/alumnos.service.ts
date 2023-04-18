import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { Alumno } from '../pages/listado-alumnos/listado-alumnos.component';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AlumnosService {
  private alumno$ = of(this.local.obtenerAlumnos());

  constructor(private local: LocalStorageService) {}

  obtenerAlumnos(): Observable<Alumno[]> {
    return this.alumno$;
  }

  obtenerAlumnoPordni(dni: number): Observable<Alumno | undefined> {
    return this.alumno$.pipe(
      map((alumnos) => alumnos.find((s: any) => s.dni === dni))
    );
  }
}
