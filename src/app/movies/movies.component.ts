import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  constructor(private router: Router) {}

  movies = [
    { id: 1, titulo: 'Yo antes de ti', director: 'Thea Sharrock', anio: 2016 },
    { id: 2, titulo: 'La novia cadáver', director: 'Tim Burton y Mike Johnson', anio: 2005 },
    { id: 3, titulo: 'Titanic', director: 'James Cameron', anio: 1997 }
  ];

  verDetalle(movie: any) {
    console.log('Película seleccionada:', movie);
    this.router.navigate(['/movie', movie.id]);
  }
}
