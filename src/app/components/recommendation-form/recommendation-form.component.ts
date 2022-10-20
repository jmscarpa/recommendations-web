import { RecommendationModel } from './../../models/recommendation.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryModel } from '../../models/category.model';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-recommendation-form',
  templateUrl: './recommendation-form.component.html',
  styleUrls: ['./recommendation-form.component.scss'],
})
export class RecommendationFormComponent implements OnInit {
  @Input() recommendation?: RecommendationModel;
  @Output() public afterSave: EventEmitter<number> = new EventEmitter<number>();

  constructor(private apiService: ApiService, private router: Router) {}

  public form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    image_url: new FormControl(''),
    category_id: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });
  public categories: CategoryModel[] = [];
  public isNew: boolean = true;
  public id: number = 0;

  ngOnInit(): void {
    this.loadCategories();

    if (this.recommendation) {
      this.id = this.recommendation.id;
      this.isNew = false;
      this.form = new FormGroup({
        name: new FormControl(this.recommendation?.name, [Validators.required]),
        image_url: new FormControl(this.recommendation?.image_url),
        category_id: new FormControl(this.recommendation?.category.id, [
          Validators.required,
        ]),
        description: new FormControl(this.recommendation?.description, [
          Validators.required,
        ]),
      });
    }
  }

  public save(): void {
    const url = this.isNew
      ? `recommendations`
      : `recommendations/${this.recommendation?.id}`;

    const method = this.isNew ? 'post' : 'patch';

    if (this.form.valid) {
      this.apiService[method](url, this.form.value)
        .then(() => {
          this.afterSave.emit(this.form.value.category_id);
        })
        .catch((response) => {
          console.log(response);
        });
    } else {
      alert('Favor preencher o formulário corretamente');
    }
  }

  public cancel(): void {
    if (this.isNew) {
      this.router.navigateByUrl('');
    } else {
      document.querySelector('dialog')?.close();
    }
  }

  private loadCategories(): void {
    this.apiService.get<CategoryModel[]>('categories').then((data) => {
      this.categories = data;
    });
  }
}
