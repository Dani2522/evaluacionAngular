import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordenarPorTitulo'
})
export class OrdenarPorTituloPipe implements PipeTransform {

  transform(peliculas: any[]): any[] {
    if (!peliculas || peliculas.length === 0) {
      return [];
    }
    
    // Utilizamos el método sort() para ordenar las películas por su título.
    return peliculas.sort((a, b) => {
      const tituloA = a.title.toLowerCase();// vuelve el titulo en minusculas 
      const tituloB = b.title.toLowerCase();
      if (tituloA < tituloB) {
        return -1;
      }
      if (tituloA > tituloB) {
        return 1;
      }
      return 0;
    });
  }
}


