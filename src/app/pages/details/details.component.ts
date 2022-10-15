import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecommendationModel } from './../../models/recommendation.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
})
export class DetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute, 
    private apiService: ApiService, 
    private router: Router
  ) {}

  public id: number = this.route.snapshot.params.id;
  public loading: boolean = true;
  public recommendation?: RecommendationModel;
  public url: string = `/recommendations/${this.id}`
  
  public ngOnInit(): void {
    this.apiService.get<RecommendationModel>(this.url).then((data) => {
      this.recommendation = data
      this.loading = false;
    });
  }

  public async destroy(): Promise<void> {
    await this.apiService.delete(this.url)
    this.router.navigateByUrl('')
  }
}
