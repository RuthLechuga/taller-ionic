import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(public http: HttpClient) { }

  getPeliculas(id){
    return this.http.get
    ('https://api.themoviedb.org/3/discover/movie?api_key=32fb04e1f80ed26c84daa2ce597fd121&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres='+id);
  }

}
