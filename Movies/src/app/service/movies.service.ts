import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';
import { MoviesList } from '../model/movie-server';
import { GenreList } from '../model/genre-server';
import { Genre } from '../model/genre';
import { Movies } from '../model/movies';


const url = "http://localhost:3000/api/movies";
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }

  getAll(params?:any):Observable<MoviesList>{
    let queryParams = {};
    if(params){
      queryParams = {
        params: new HttpParams().set("page", params.page || "")
        .set("pageSize", params.pageSize || "")
        .set("sort", params.sort && params.sort.toString() || "")
        .set("sortDirection", params.sortDirection && params.sortDirection.toString() || "")
      }
    }
    return this.http.get(url,queryParams).pipe(map(data=>{
      return new MoviesList(data);
    }));
  }

  getGenre():Observable<GenreList>{
    return this.http.get("http://localhost:3000/api/genres").pipe(map(data=>{
      return new GenreList(data);
    }));
  }

  addGenre(genre:Genre):Observable<Genre>{
    return this.http.post<Genre>("http://localhost:3000/api/genres",genre).pipe(map(data=>{
      return new Genre(data);
    }));
  }

  updateMovie(movie:Movies):Observable<Movies>{
    return this.http.put(url+"/"+movie._id,movie).pipe(map(data=>{
      return new Movies(data);
    }));
  }

  addMovie(movie:Movies):Observable<Movies>{
    return this.http.post(url,movie).pipe(map(data=>{
      return new Movies(data);
    }));
  }

  getMovie(id:number):Observable<Movies>{
    return this.http.get(url+"/"+id).pipe(map(data=>{
      return new Movies(data);
    }));
  }
  
}
