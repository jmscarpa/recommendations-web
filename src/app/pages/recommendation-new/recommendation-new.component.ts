import { Component, OnInit } from '@angular/core';

import { CategoryModel } from '../../models/category.model';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-recommendation-new',
  templateUrl: './recommendation-new.component.html',
})
export class RecommendationNewComponent implements OnInit {
  constructor(private apiService: ApiService, private router: Router) {}

  public categories: CategoryModel[] = [];
  public form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    image_url: new FormControl(''),
    category_id: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  public ngOnInit(): void {
    this.loadCategories();
  }

  public save(): void {

    if (this.form.valid) {
      this.apiService.post('recommendations', this.form.value).then((_) => {
          this.router.navigateByUrl('');
        })
        .catch((response) => {
          alert(response.error.error);
        });
    } else {
      alert('Favor preencher o formulário corretamente');
    }
  }

  private async loadCategories(): Promise<void> {
    this.categories = await this.apiService.get<CategoryModel[]>('categories');
  }
}
