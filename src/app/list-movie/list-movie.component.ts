// list-movie.component.ts

import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.css']
})
export class ListMovieComponent implements OnInit {
  peliculas: any[] = [];
// inyecto mi servicio para utilizar los metodos que estan creados 
  constructor(private peliculaService: MovieServiceService) { }

  ngOnInit(): void {
    this.cargarPeliculas();
  }

  // estoy utilizando mi observable subcribiendome al metodo 
  cargarPeliculas(): void {
    this.peliculaService.mostrarPeliculas().subscribe(peliculas => {
      this.peliculas = peliculas;
      this.peliculaService.guardarPeliculasLocalStorage(this.peliculas);
    });
  }

  eliminarPelicula(id: string): void {
    const index = this.peliculas.findIndex(p => p.id === id);
    if (index !== -1) {
      this.peliculaService.eliminarPeliculaLocalStorage(id);
      this.peliculas.splice(index, 1);
    }
  }

  editarPelicula(pelicula: any): void {
    pelicula.editando = true;
  }

  guardarCambios(pelicula: any): void {
    const index = this.peliculas.findIndex(p => p.id === pelicula.id);
    if (index !== -1) {
      this.peliculas[index] = pelicula; // Actualizar la película en la lista local
      this.peliculaService.actualizarPeliculaLocalStorage(pelicula.id, pelicula); // Actualizar la película en el Local Storage
    } else {
      console.error('No se encontró la película en la lista local.');
    }
    pelicula.editando = false; // Cambiar el estado de edición de la película
  }
  
}
