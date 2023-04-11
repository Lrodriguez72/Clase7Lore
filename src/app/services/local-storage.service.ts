import { Injectable } from '@angular/core';
import { Alumno } from '../pages/listado-alumnos/listado-alumnos.component';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  agregarAlumno(alumno: any) {
    let array: Alumno[] = JSON.parse(localStorage.getItem('alumnos')!) || [];
    array.push(alumno);
    localStorage.setItem('alumnos', JSON.stringify(array));
  }

  obtenerAlumnos() {
    return JSON.parse(localStorage.getItem('alumnos')!);
  }

  obtenerAlumno(dni: number) {
    let array: Alumno[] = JSON.parse(localStorage.getItem('alumnos')!) || [];
    return array.find((a) => a.dni);
  }

  eliminarAlumno(dni: number) {
    let array: Alumno[] = JSON.parse(localStorage.getItem('alumnos')!) || [];
    let newArray = array.filter((a) => a.dni != dni);
    localStorage.setItem('alumnos', JSON.stringify(newArray));
  }

  modificarAlumno(alumnoModificar: any) {
    let array: Alumno[] = JSON.parse(localStorage.getItem('alumnos')!) || [];

    let alumnoEditar = array.find(
      (alumno) => alumno.dni == alumnoModificar.dni
    );
    if (alumnoEditar !== undefined) {
      alumnoEditar.nombre = alumnoModificar.nombre;
      alumnoEditar.apellido = alumnoModificar.apellido;
      alumnoEditar.dni = alumnoModificar.dni;
      alumnoEditar.email = alumnoModificar.email;
      alumnoEditar.pais = alumnoModificar.pais;

      let newarray = [array, alumnoEditar];

      localStorage.setItem('alumnos', JSON.stringify(newarray));
    }
  }
}
