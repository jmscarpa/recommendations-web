import { Component } from '@angular/core';
import { CourseModel } from '../../models/course.model';

@Component({
  selector: 'app-courses-index',
  templateUrl: './courses-index.component.html',
})
export class CoursesIndexComponent {
  public courses: CourseModel[] = [
    {
      id: 1,
      name: 'Jiu Jitsu',
      description: 'Luta Brasileira',
      students: 5,
    },
    {
      id: 2,
      name: 'Karatê',
      description: 'Luta japonesa',
      students: 10,
    },
    {
      id: 3,
      name: 'Krav Maga',
      description: 'Luta Israelênse',
      students: 4,
    },
  ];
}
