import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { CoursesIndexComponent } from './pages/courses-index/courses-index.component';
import { CoursesShowComponent } from './pages/courses-show/courses-show.component';

import { CourseComponent } from './components/course/course.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesIndexComponent,
    CourseComponent,
    CoursesShowComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
