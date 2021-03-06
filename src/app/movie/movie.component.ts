import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Movie } from './movie';
import { LoadingIndicatorService } from '../loading/loading-indicator.service';




@Component({
  selector: 'im-movie-page',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})

export class MovieComponent implements OnInit {


  movie: Movie = {adult: false, backdrop_path: "", genre_ids: [], id: 0, original_language: "",
                  original_title: "", overview: "", popularity: 0, poster_path: "", release_date: "",
                  title: "", vote_average: 0, vote_count: 0
  };
  loading: boolean = false;

  constructor(private loadingIndicatorService: LoadingIndicatorService,
              private activatedRoute: ActivatedRoute) {}
  
  ngOnInit() {
    this.loadingIndicatorService.onLoadingChanged.subscribe(isLoading => this.loading = isLoading);
    this.movie = this.activatedRoute.snapshot.data.movie;
  }

}


/*this.httpRequestService.makeRequest(URL_BASE_API, movieId, PARAMS_API).subscribe(
      movie => {
        this.movie.adult = movie['adult'];
        this.movie.backdrop_path = movie['backdrop_path'];
        this.movie.genre_ids = movie['genres_id'];
        this.movie.id = movie['id'];
        this.movie.original_language = movie['original_language'];
        this.movie.original_title = movie['original_title'];
        this.movie.overview = movie['overview'];
        this.movie.popularity = movie['popularity'];
        this.movie.poster_path = movie['poster_path'];
        this.movie.release_date = movie['release_data'];
        this.movie.title = movie['title'];
        this.movie.vote_average = movie['vote_average'];
        this.movie.vote_count = movie['vote_count'];
      }
        
    );*/
  