import { Component } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {

  nuevaPelicula: any = {
    id: '', // Agrega un campo para el ID de la película
    title: '',
    director: '',
    description: '',
    image: null
  };
  previewImage: string | ArrayBuffer | null = null;

  constructor(private peliculaService: MovieServiceService) {}

  agregarPelicula(): void {
    this.peliculaService.agregarPeliculaLocalStorage(this.nuevaPelicula);
    this.limpiarFormulario();
  }

  actualizarPelicula(): void {
    // Obtener el ID de la película del formulario
    const id = this.nuevaPelicula.id;

    // Actualizar la película utilizando el servicio
    this.peliculaService.actualizarPeliculaLocalStorage(id, this.nuevaPelicula);

    this.limpiarFormulario();
  }

  limpiarFormulario(): void {
    // Limpiar el objeto nuevaPelicula y la vista previa de la imagen
    this.nuevaPelicula = { id: '', title: '', director: '', description: '', image: null };
    this.previewImage = null;
  }

  onImageSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
        this.previewImage = e.target.result;
        this.nuevaPelicula.image = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

}
