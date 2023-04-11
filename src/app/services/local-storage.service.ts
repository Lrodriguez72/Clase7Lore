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
    console.log(array.find((a) => a.dni));
    return array.find((a) => a.dni);
  }

  eliminarAlumno(dni: number) {
    let array: Alumno[] = JSON.parse(localStorage.getItem('alumnos')!) || [];
    let newArray = array.filter((a) => a.dni != dni);
    localStorage.setItem('alumnos', JSON.stringify(newArray));
  }
}
