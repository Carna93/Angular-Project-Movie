import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './navbar/home/home.component';
import { MoviesComponent } from './navbar/movies/movies.component';
import { EditComponent } from './navbar/edit/edit.component';
import { PaginationComponent } from './navbar/movies/pagination/pagination.component';
import { MovieListComponent } from './navbar/movies/movie-list/movie-list.component';
import { HttpClientModule } from '@angular/common/http';
import { SortingComponent } from './navbar/movies/sorting/sorting.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MoviesComponent,
    EditComponent,
    PaginationComponent,
    MovieListComponent,
    SortingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
