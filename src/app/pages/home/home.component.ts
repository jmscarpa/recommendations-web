import { Component, OnInit } from '@angular/core';

import { RecommendationModel } from '../../models/recommendation.model';
import { CategoryModel } from '../../models/category.model';
import { AuthService } from 'src/app/services/auth.service';
import { dataset } from '../../data/recommendations';
import { HttpClient } from '@angular/common/http';

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

  public recommendations: RecommendationModel[] = [];
  public kinds: CategoryModel[] = [];
  public currentKind: string = 'all';
  public currentUser: string = this.authService.currentUser;

  ngOnInit(): void {
    this.loadCategories();
    this.loadRecommendations();
  }

  public filter(kind: CategoryModel): void {
    this.currentKind = kind.id;
    if (kind.name == 'all') {
      this.recommendations = dataset;
    } else {
      this.recommendations = dataset.filter((item) => item.kind == kind);
    }
  }

  private loadRecommendations(): void {
    const url = 'https://jp-recommendations-api.herokuapp.com/recommendations';
    this.httpClient
      .get<RecommendationModel[]>(url)
      .toPromise()
      .then((data) => {
        this.recommendations = data;
      });
  }

  private loadCategories(): void {
    const url = 'https://jp-recommendations-api.herokuapp.com/categories';
    this.httpClient
      .get<CategoryModel[]>(url)
      .toPromise()
      .then((data) => {
        this.kinds = data;
      });
  }
}
