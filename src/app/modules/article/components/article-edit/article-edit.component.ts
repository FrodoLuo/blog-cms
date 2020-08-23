import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ArticleService } from '../../../../services/article.service';
import { ActivatedRoute } from '@angular/router';
import { NotifyService } from 'src/app/modules/notify/notify.service';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.scss']
})
export class ArticleEditComponent implements OnInit {

  constructor(
    private articleService: ArticleService,
    private notifyService: NotifyService,
    private router: ActivatedRoute
  ) {}

  public articleFormGroup = new FormGroup({
    title: new FormControl('', {
      validators: [Validators.required]
    }),
    content: new FormControl(''),
    brief: new FormControl(''),
    tags: new FormControl(''),
    id: new FormControl(0),
    authorId: new FormControl(0)
  })

  public showPreview = false;

  ngOnInit(): void {
    // TODO
    if (this.isEdit()) {
      this.articleService.getArticleDetail(Number.parseInt(this.router.snapshot.params['id']))
        .subscribe(res => {
          this.articleFormGroup.patchValue(res);
        });
    }
  }

  onSubmit(): void {
    this.articleService.saveArticle(this.articleFormGroup.getRawValue())
      .subscribe(() => {
        this.notifyService.info('Article Saved.');
      });
  }

  isEdit(): boolean {
    return this.router.snapshot.url[0]?.path === 'edit';
  }

}
