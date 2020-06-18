import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/model/movies';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  Movies:Movies[];
  count:number;
  parameters = {
    page:1,
    pageSize:6,
    sort:'rating',
    sortDirection:'desc'
  }
  constructor(private service:MoviesService) { }

  ngOnInit(): void {
    this.updateAll();
  }

  updateAll(params?:any){
    if(params){
      this.parameters.page = params.page || this.parameters.page;
      this.parameters.pageSize = params.pageSize || this.parameters.pageSize;
      this.parameters.sort = params.sort || this.parameters.sort;
      this.parameters.sortDirection = params.sortDirection || this.parameters.sortDirection;
    }
    this.service.getAll(this.parameters).subscribe(data=>{
      this.Movies = data.results;
      this.count = data.count;
    });
  }


  changePage(newpage:number){
    this.parameters.page = newpage;
    this.updateAll();
  }

}
