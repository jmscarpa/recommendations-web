import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-recommendation-new',
  templateUrl: './recommendation-new.component.html',
})
export class RecommendationNewComponent {
  constructor(private router: Router) {}

  public redirectToHome(categoryId: number): void {
    this.router.navigate([''], { queryParams: { categoryId } });
  }
}
