import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombreyapellido',
})
export class NombreyapellidoPipe implements PipeTransform {
  transform(element: any): string {
    let newStr: string = element.nombre + element.apellido;
    {
      return newStr;
    }
  }
}
