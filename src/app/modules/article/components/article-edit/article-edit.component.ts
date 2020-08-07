import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ArticleService } from '../../../../services/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.scss']
})
export class ArticleEditComponent implements OnInit {

  constructor(
    private articleService: ArticleService,
    private router: Router
  ) {}

  public articleFormGroup = new FormGroup({
    title: new FormControl('', {
      validators: [Validators.required]
    }),
    content: new FormControl(''),
    brief: new FormControl(''),
    tags: new FormControl('')
  })

  public showPreview = false;

  ngOnInit(): void {
    // TODO
    if (this.isEdit()) {}
  }

  onSubmit(): void {
    console.log(this.articleFormGroup.getRawValue());
  }

  isEdit(): boolean {
    return this.router.routerState.snapshot.url.match(/dashboard\/article\/edit.*/) !== null;
  }
}
