import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecommendationModel } from './../../models/recommendation.model';

import { dataset } from '../../data/recommendations';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
})
export class DetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  public id: number = this.route.snapshot.params.id;
  public loading: boolean = true;
  public recommendation?: RecommendationModel;

  public ngOnInit(): void {
    setTimeout(() => {
      this.recommendation = dataset.find((item) => item.id == this.id);
      this.loading = false;
    }, 500);
  }
}
