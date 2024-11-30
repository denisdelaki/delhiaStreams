import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: () => import('./home-module/home-module.module').then(m => m.HomeModuleModule) },
    { path: 'auth', loadChildren: () => import('./auth-module/auth-module.module').then(m => m.AuthModuleModule) },
    { path: 'movie', loadChildren: () => import('./movie-module/movie-module.module').then(m => m.MovieModuleModule) },
    { path: '**', redirectTo: 'home' }
];
