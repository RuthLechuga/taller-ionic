import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { RespuestaMDB, Pelicula } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  peliculas_genrer = [
      {
        "id": 28,
        "name": "Action",
        "peliculas": []
      },
      {
        "id": 35,
        "name": "Comedy",
        "peliculas": []
      },
      {
        "id": 18,
        "name": "Drama",
        "peliculas": []
      },
      {
        "id": 10749,
        "name": "Romance",
        "peliculas": []
      },
      {
        "id": 53,
        "name": "Thriller",
        "peliculas": []
      }
    ]

  slidesOpt = {
    slidesPerView: 1.1,
    freeMode: true
  }

  constructor(public movieService: MoviesService) {}

  ngOnInit(): void {
    this.cargarPeliculas();
  }

  cargarPeliculas(){  
    this.peliculas_genrer.forEach(element => {
      this.movieService.getPeliculas(element.id).subscribe((resp: RespuestaMDB)=> {
        element.peliculas = resp.results;
      })
    });
    console.log(this.peliculas_genrer)
  } 
}
