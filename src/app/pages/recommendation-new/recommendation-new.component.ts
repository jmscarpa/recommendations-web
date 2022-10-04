import { Component } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recommendation-new',
  templateUrl: './recommendation-new.component.html',
})
export class RecommendationNewComponent {
  public categories: string[] = ['Série', 'Jogo', 'Filme', 'Livro'];

  public form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    imageUrl: new FormControl(''),
    category: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  public save(): void {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      alert('Favor preencher o formulário corretamente');
    }
  }
}
