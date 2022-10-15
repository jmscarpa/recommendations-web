import { Component, OnInit } from '@angular/core';

import { RecommendationModel } from '../../models/recommendation.model';
import { CategoryModel } from '../../models/category.model';
import { AuthService } from 'src/app/services/auth.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private apiService: ApiService
  ) {}

  public readonly ALL_RECOMMENDATIONS: number = 0;
  public recommendations: RecommendationModel[] = [];
  public categories: CategoryModel[] = [];
  public currentCategory: number = this.ALL_RECOMMENDATIONS;
  public currentUser: string = this.authService.currentUser;
  public loading: boolean = true;

  ngOnInit(): void {
    this.loadCategories();
    this.loadRecommendations(this.ALL_RECOMMENDATIONS);
  }

  public filter(categoryId: number): void {
    this.currentCategory = categoryId;
    this.loadRecommendations(categoryId)
  }

  private loadRecommendations(categoryId: number): void {
    const params = categoryId != this.ALL_RECOMMENDATIONS ? { category: categoryId } : {}
    this.loading = true;

    this.apiService.get<RecommendationModel[]>('recommendations', { params }).then((data) => {
      this.recommendations = data;
      this.loading = false;
    });
  }

  private async loadCategories(): Promise<void> {
    this.categories = await this.apiService.get<CategoryModel[]>('categories')
  }
}
