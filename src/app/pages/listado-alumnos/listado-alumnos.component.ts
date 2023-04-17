import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { MatDialog } from '@angular/material/dialog';
import { ModificarAlumnoComponent } from '../dialogos/misdialogos/modificar-alumno/modificar-alumno.component';
//import { AgregarAlumnoComponent } from '../dialogos/mis-dialogos/agregar-alumno/agregar-alumno.component';

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
    'nombreCompleto',

    'DNI',
    'Email',
    'Pais',
    'Opciones',
  ];

  dataSource: any[] = [];

  //dataSource = new MatTableDataSource(this.array);

  constructor(
    private localService: LocalStorageService,
    private dialogoService: MatDialog
  ) {
    if (!localStorage.getItem('alumnos'))
      localStorage.setItem('alumnos', JSON.stringify(this.array));
  }

  eliminar(id: number) {
    this.localService.eliminarAlumno(id);
    this.dataSource = this.localService.obtenerAlumnos();
  }

  modificar(alumno: any) {
    this.dialogoService
      .open(ModificarAlumnoComponent, {
        data: alumno,
      })
      .afterClosed()
      .subscribe(() => (this.dataSource = this.localService.obtenerAlumnos()));
    this.dataSource = this.localService.obtenerAlumnos();
  }

  ngOnInit() {
    console.log(this.localService.obtenerAlumnos());
    this.dataSource = this.localService.obtenerAlumnos();
  }
}
