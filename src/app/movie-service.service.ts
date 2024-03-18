// movie-service.service.ts

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
  // consumiendo la pagina ----
  private apiUrl = 'https://ghibliapi.vercel.app/films';
  private localStorageKey = 'peliculas';

  constructor(private http: HttpClient) { }
  /// aqui esta colocando todas las peliculas en el visor de mi interfaz grafica
  mostrarPeliculas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  // aqui esta guardando mi informacion en el local storage de mi navegador
  guardarPeliculasLocalStorage(peliculas: any[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(peliculas));
  }
  // aquie esta trayendo todas mis peliculas que estan almacenadas en mi local storage 
  obtenerPeliculasLocalStorage(): any[] {
    const peliculasString = localStorage.getItem(this.localStorageKey);
    return peliculasString ? JSON.parse(peliculasString) : [];
  }
  // aqui esta utilizando mi formulario para agregar una nueva pelicula en mi local storage
  agregarPeliculaLocalStorage(pelicula: any): void {
    const peliculas = this.obtenerPeliculasLocalStorage();
    peliculas.push(pelicula);
    this.guardarPeliculasLocalStorage(peliculas);
  }
 // aqui la esta actualizando 
 actualizarPeliculaLocalStorage(id: string, peliculaActualizada: any): void {
  let peliculas: any[] = this.obtenerPeliculasLocalStorage();
  const index = peliculas.findIndex(pelicula => pelicula.id === id);
  if (index !== -1) {
    peliculas[index] = peliculaActualizada;
    this.guardarPeliculasLocalStorage(peliculas);
  } else {
    console.error('No se encontró la película a actualizar en el Local Storage.');
  }
}
 // aquie esta eliminando mi pelicula 
  eliminarPeliculaLocalStorage(id: string): void {
    let peliculas = this.obtenerPeliculasLocalStorage();
    peliculas = peliculas.filter(p => p.id !== id);
    this.guardarPeliculasLocalStorage(peliculas);
  }
}
