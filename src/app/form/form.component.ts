import { Component } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  nuevaPelicula: any = {
    title: '',
    director: '',
    description: '',
    image: null // Cambio: inicializa image como null
  };
  previewImage: string | ArrayBuffer | null = null; // Variable para almacenar la vista previa de la imagen

  constructor(private peliculaService: MovieServiceService) {}

  agregarPelicula(): void {
    // Agregar la nueva película utilizando el servicio
    this.peliculaService.agregarPeliculaLocalStorage(this.nuevaPelicula);
    // Limpiar el objeto nuevaPelicula después de agregar la película
    this.nuevaPelicula = { title: '', director: '', description: '', image: null };
    this.previewImage = null; // Limpiar la vista previa de la imagen después de agregar la película
  }

  actualizarPelicula(): void {
    // Obtener el id de la película que se está actualizando
    const id = this.nuevaPelicula.id; // Asigna el id de la película que quieres actualizar
  
    // Actualizar la película utilizando el servicio
    this.peliculaService.actualizarPeliculaLocalStorage(id, this.nuevaPelicula);
  
    // Limpiar el objeto nuevaPelicula después de actualizar la película
    this.nuevaPelicula = { title: '', director: '', description: '', image: null };
    this.previewImage = null; // Limpiar la vista previa de la imagen después de actualizar la película
  }
  

  onImageSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      // Leer el archivo de imagen como una URL de datos
      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
        this.previewImage = e.target.result; // Asignar la URL de datos a la variable de vista previa
        this.nuevaPelicula.image = e.target.result; // Asignar la URL de datos a la propiedad image de nuevaPelicula
      };
      reader.readAsDataURL(file);
    }
  }
}
