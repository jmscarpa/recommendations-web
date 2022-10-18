import { Component, OnInit } from '@angular/core';

import { RecommendationModel } from '../../models/recommendation.model';
import { CategoryModel } from '../../models/category.model';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private httpClient: HttpClient
  ) {}

  public readonly ALL_RECOMMENDATIONS: number = 0;
  public recommendations: RecommendationModel[] = [];
  public categories: CategoryModel[] = [];
  public currentCategory: number = this.ALL_RECOMMENDATIONS;
  public currentUser: string = this.authService.currentUser;
  public loading: boolean = true;

  public ngOnInit(): void {
    this.loadCategories();
    this.loadRecommendations(this.ALL_RECOMMENDATIONS);
  }

  public filter(categoryId: number): void {
    this.currentCategory = categoryId;
    this.loadRecommendations(categoryId);
  }

  private loadRecommendations(categoryId: number): void {
    const url = `${environment.apiUrl}/recommendations`;

    let params: object = {};
    if (categoryId != this.ALL_RECOMMENDATIONS) {
      params = { category: categoryId };
    }

    this.loading = true;
    this.httpClient
      .get<RecommendationModel[]>(url, { params })
      .toPromise()
      .then((data) => {
        this.recommendations = data;
        this.loading = false;
      });
  }

  private loadCategories(): void {
    const url = `${environment.apiUrl}/categories`;
    this.httpClient
      .get<CategoryModel[]>(url)
      .toPromise()
      .then((data) => {
        this.categories = data;
      });
  }
}
