import { Component, OnInit } from '@angular/core';

import { RecommendationModel } from '../../models/recommendation.model';
import { dataset } from '../../data/recommendations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public recommendations: RecommendationModel[] = dataset;
  public kinds: string[] = [];
  public currentKind: string = 'all';

  ngOnInit(): void {
    dataset.forEach((item) => {
      if (!this.kinds.includes(item.kind)) {
        this.kinds.push(item.kind);
      }
    });
  }

  public filter(kind: string): void {
    this.currentKind = kind;
    if (kind == 'all') {
      this.recommendations = dataset;
    } else {
      this.recommendations = dataset.filter((item) => item.kind == kind);
    }
  }
}
