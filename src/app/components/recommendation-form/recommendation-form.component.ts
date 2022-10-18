import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommendation-form',
  templateUrl: './recommendation-form.component.html',
  styleUrls: ['./recommendation-form.component.scss'],
})
export class RecommendationFormComponent implements OnInit {
  constructor() {}

  @Input() recommendationId?: number;

  ngOnInit(): void {}
}
