import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  pelicula: any;

  movies = [
    { id: 1, titulo: 'Yo antes de ti', director: 'Thea Sharrock', anio: 2016 },
    { id: 2, titulo: 'La novia cadáver', director: 'Tim Burton y Mike Johnson', anio: 2005 },
    { id: 3, titulo: 'Titanic', director: 'James Cameron', anio: 1997 }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pelicula = this.movies.find(m => m.id === id);
  }
}
