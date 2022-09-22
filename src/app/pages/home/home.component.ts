import { Component } from '@angular/core';

import { RecommendationModel } from '../../models/recommendation.model';
import { dataset } from '../../data/recommendations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public recommendations: RecommendationModel[] = dataset;
}
