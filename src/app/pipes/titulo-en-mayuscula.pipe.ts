import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tituloEnMayuscula'
})
export class TituloEnMayusculaPipe implements PipeTransform {

  transform(value: string): string {
    return value.toUpperCase();
  }

}
