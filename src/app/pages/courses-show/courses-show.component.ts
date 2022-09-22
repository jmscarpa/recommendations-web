import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses-show',
  templateUrl: './courses-show.component.html',
})
export class CoursesShowComponent {
  constructor(private route: ActivatedRoute) {}

  public id: number = this.route.snapshot.params.id;
}
