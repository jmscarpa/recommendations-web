import { Component, Input } from '@angular/core';
import { CourseModel } from '../../models/course.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
})
export class CourseComponent {
  @Input() course!: CourseModel;
}
