import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/model/genre';
import { MoviesService } from 'src/app/service/movies.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MoviesList } from 'src/app/model/movie-server';
import { Movies } from 'src/app/model/movies';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  userForm:FormGroup;
  movie:Movies;
  genres:Genre[];
  genreMenu:boolean = false;
  newGenre:Genre;
  id;
  constructor(private service:MoviesService, private fb:FormBuilder, private route:ActivatedRoute) { 
    this.createForm();
  }

  ngOnInit(): void {
    this.route.params.subscribe(data=>{
      this.id = data['id'];
      if(this.id == 'add'){
        this.userForm.reset();
        this.id = null;
      } else {
        this.service.getMovie(parseInt(this.id)).subscribe(data=>{
          this.movie = data;
          this.userForm.patchValue(this.movie);
          this.id = this.movie._id;
        });
      }
      this.service.getGenre().subscribe(data=>{
        this.genres = data.genreList;
      });
    });    
  }

  createForm(){
    this.userForm = this.fb.group({
      'name': ['', Validators.required],
      'description': ['', [Validators.required, Validators.minLength(30), Validators.maxLength(250)]],
      'year': ['', [Validators.required, Validators.min(1000), Validators.max(2020)]],
      'rating': [''],
      'duration': [''],
      'director': [''],
      'genre': [''],
    });
  }

  getNewGenre(){
    this.genreMenu = !this.genreMenu;
    if(this.genreMenu){
      this.newGenre = new Genre();
    }
  }

  addNewGenre(){
    this.service.addGenre(this.newGenre).subscribe(data=>{
      this.genres.push(data);
      this.userForm.patchValue({"genre":data.name});
      this.genreMenu = false;
    });
  }


  OnSubmit(){
    let newMovie = new Movies(this.userForm.value);
    if(this.movie && this.movie._id){
      newMovie._id = this.movie._id;
      this.service.updateMovie(newMovie).subscribe(data=>{
        this.userForm.reset();
        window.alert("Successfully updated movie!");
      });
    } else {
      this.service.addMovie(newMovie).subscribe(data=>{
        this.userForm.reset();
        window.alert("Successfully saved movie!");
      })
    }
  }

}
