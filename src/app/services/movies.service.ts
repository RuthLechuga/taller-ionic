import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(public http: HttpClient) { }

  getCartelera(){
    return this.http.get
    ('https://api.themoviedb.org/3/discover/movie?api_key=32fb04e1f80ed26c84daa2ce597fd121&language=es&sort_by=release_date.asc&include_adult=false&include_video=false&page=1&primary_release_date.gte=2020-04-01&primary_release_date.lte=2020-04-03');
  }

}
