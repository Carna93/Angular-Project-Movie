import { Component, OnInit, Input } from '@angular/core';
import { Movies } from 'src/app/model/movies';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  @Input() movies:Movies;
  
  constructor() { }

  ngOnInit(): void {
  }

}
