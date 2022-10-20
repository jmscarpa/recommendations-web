import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { RecommendationModel } from './../../models/recommendation.model';
import { CommentModel } from './../../models/comment.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  public id: number = this.route.snapshot.params.id;
  public loading: boolean = true;
  public recommendation!: RecommendationModel;
  public url: string = `recommendations/${this.id}`;
  public comments: CommentModel[] = [];
  public form: FormGroup = new FormGroup({
    content: new FormControl('', [Validators.required]),
  });

  @ViewChild('editForm')
  public dialog?: ElementRef<HTMLDialogElement>;

  public ngOnInit(): void {
    this.loadRecommendation();
  }

  public destroy(): void {
    this.loading = true;

    this.apiService.delete(this.url).then(() => {
      this.router.navigateByUrl('');
    });
  }

  public loadRecommendation(): void {
    this.apiService.get<RecommendationModel>(this.url).then((data) => {
      this.recommendation = data;
      this.comments = data.comments;
      this.loading = false;
    });
  }

  public onAfterSave(): void {
    document.querySelector('dialog')?.close();
    this.loadRecommendation();
  }

  public saveComment(): void {
    this.apiService
      .post<CommentModel>(
        `recommendations/${this.id}/comments`,
        this.form.value
      )
      .then((data) => {
        this.comments = [...this.comments, data];
        this.form.reset();
      })
      .catch((response) => {
        alert(response.error.error);
      });
  }

  public showEdit(): void {
    this.dialog?.nativeElement.showModal();
  }
}
