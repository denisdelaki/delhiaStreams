import { NgModule, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { PlayerComponent } from './player/player.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SafeUrlPipe } from "./pipes/safe-url.pipe";

const routes: Routes = [
  { path: 'stream', component: PlayerComponent },
  { path: 'tvshow/:id', component: PlayerComponent },
];

@NgModule({
  declarations: [
    PlayerComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    SafeUrlPipe
],
providers: [
  {
    provide: 'isBrowser',
    useFactory: (platformId: Object) => isPlatformBrowser(platformId),
    deps: [PLATFORM_ID]
  }
]
})
export class MovieModuleModule { }
