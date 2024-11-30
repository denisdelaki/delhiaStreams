import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'auth', component: AuthComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthComponent,
    RouterModule.forChild(routes)
  ]
})
export class AuthModuleModule { }
