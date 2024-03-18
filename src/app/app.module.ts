import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListMovieComponent } from './list-movie/list-movie.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'; // Agrega el módulo MatCardModule
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { UpdateComponent } from './update/update.component';
import { OrdenarPorTituloPipe } from './pipes/ordenar-por-titulo.pipe';
import { TituloEnMayusculaPipe } from './pipes/titulo-en-mayuscula.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ListMovieComponent,
    FormComponent,
    UpdateComponent,
    OrdenarPorTituloPipe,// declara la pipe personalizada
    TituloEnMayusculaPipe // declara la pipe personalizada
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    FormsModule 
  ],
  bootstrap: [AppComponent] // Agrega AppComponent al arreglo bootstrap
})
export class AppModule { }
