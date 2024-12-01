import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private baseUrl = 'https://vidsrc.xyz';

  constructor(private http: HttpClient) {}

  getLatestMovies(page: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/movies/latest/page-${page}.json`);
  }

  getLatestTvShows(page: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/tvshows/latest/page-${page}.json`);
  }

  getVideoStream(id: string, type: string): Observable<string> {
    const url = `${this.baseUrl}/embed/${type}?imdb=${id}`;
    return this.http.get(url, { responseType: 'text' }).pipe(
      map(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        return doc.querySelector('#player_iframe')?.getAttribute('src') || '';
      })
    );
  }

  getMovieEmbedUrl(id: string, type: 'imdb' | 'tmdb', language?: string): string {
    let url = `${this.baseUrl}/api/stream`;
    
    if (id.startsWith('tt')) {
      url += `?imdb=${id}`;
    } else {
      url += `?tmdb=${id}`;
    }
    
    if (language) {
      url += `&ds_lang=${language}`;
    }
    
    return url;
  }

  getTvShowEmbedUrl(id: string, type: 'imdb' | 'tmdb', language?: string): string {
    let url = `${this.baseUrl}/embed/tv`;
    
    if (id.startsWith('tt')) {
      url += `?imdb=${id}`;
    } else {
      url += `?tmdb=${id}`;
    }
    
    if (language) {
      url += `&ds_lang=${language}`;
    }
    
    return url;
  }
}
