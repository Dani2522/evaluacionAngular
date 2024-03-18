import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMovieComponent } from './list-movie/list-movie.component';
import { FormComponent } from './form/form.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path: 'lista', component:ListMovieComponent }, //pesteña de lista
  { path: 'registro', component:FormComponent}, // pestaña de registro
  { path: "actualizar", component:UpdateComponent} // pesta de actualizar
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
