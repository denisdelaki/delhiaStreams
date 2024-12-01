import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../movie-module/services/movie.service';
import { Router } from '@angular/router';
import { MovieItem } from '../models/movie';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  contentList: any;
  currentPage = 1;
  contentType: 'movie' | 'tv' = 'movie';

  constructor(
    private movieService: MovieService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadContent();
  }

  loadContent() {
    if (this.contentType === 'movie') {
      this.movieService.getLatestMovies(this.currentPage).subscribe((data: any) => {
        this.contentList=data.result;
        console.log(this.contentList);
      });
    } else {
      this.movieService.getLatestTvShows(this.currentPage).subscribe((data: any) => {
        this.contentList=data.result;
        console.log(this.contentList);
      });
    }
  }

  loadPage(page: number) {
    this.currentPage = page;
    this.loadContent();
  }

  playContent(item: any) {
    const queryParams = {
      id: item.imdb_id || item.tmdb_id,
      type: this.contentType,
      idType: item.imdb_id ? 'imdb' : 'tmdb'
    };
    console.log('Navigating with queryParams:', queryParams);
    this.router.navigate(['/movie/stream'], { queryParams });
  }

  switchContentType(type: 'movie' | 'tv') {
    this.contentType = type;
    this.currentPage = 1;
    this.loadContent();
  }
}