import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

import { CoursesIndexComponent } from './pages/courses-index/courses-index.component';
import { CoursesShowComponent } from './pages/courses-show/courses-show.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cursos', component: CoursesIndexComponent },
  { path: 'cursos/:id/detalhes', component: CoursesShowComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
