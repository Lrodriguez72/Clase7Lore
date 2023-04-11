import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

export interface Alumno {
  nombre: string;
  dni: number;
  apellido: string;
  email: string;
  pais: string;
}

@Component({
  selector: 'app-listado-alumnos',
  templateUrl: './listado-alumnos.component.html',
  styleUrls: ['./listado-alumnos.component.scss'],
})
export class ListadoAlumnosComponent implements OnInit {
  array: Alumno[] = [
    {
      nombre: 'Lorena',
      apellido: 'Rodriguez',
      dni: 22863423,
      email: 'lorer1972@gmail.com',
      pais: 'Argentina',
    },
  ];
  displayedColumns: string[] = [
    'nombre',
    'apellido',
    'DNI',
    'email',
    'pais',
    'opciones',
  ];
  dataSource = [];
  constructor(private localService: LocalStorageService) {
    if (!localStorage.getItem('alumnos'))
      localStorage.setItem('alumnos', JSON.stringify(this.array));
  }

  eliminar(id: number) {
    this.localService.eliminarAlumno(id);
    this.dataSource = this.localService.obtenerAlumnos();
  }

  ngOnInit() {
    this.dataSource = this.localService.obtenerAlumnos();
  }
}
