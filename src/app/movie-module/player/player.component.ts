import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-player',
  standalone: false,
  
  templateUrl: './player.component.html',
  styleUrl: './player.component.css'
})
export class PlayerComponent implements OnInit {
  embedUrl!: SafeResourceUrl;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService,
    private sanitizer: DomSanitizer,
    private http: HttpClient
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.route.queryParams.subscribe(params => {
        const id = params['id'];
        const type = params['type'];

        this.movieService.getVideoStream(id, type).subscribe(streamUrl => {
          if (streamUrl) {
            this.embedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(streamUrl);
          }
        });
      });
    }
  }
}