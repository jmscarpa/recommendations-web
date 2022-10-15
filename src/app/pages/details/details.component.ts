import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecommendationModel } from './../../models/recommendation.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
})
export class DetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private httpClient: HttpClient, private router: Router) {}

  public id: number = this.route.snapshot.params.id;
  public loading: boolean = true;
  public recommendation?: RecommendationModel;
  public url: string = `${environment.apiUrl}/recommendations/${this.id}`
  
  public ngOnInit(): void {
    this.httpClient
      .get<RecommendationModel>(this.url)
      .toPromise()
      .then((data) => {
        this.recommendation = data
        this.loading = false;
      });
  }

  public destroy(): void {
    this.httpClient
      .delete(this.url)
      .toPromise()
      .then((data) => {
        this.router.navigateByUrl('')
      });
  }
}
