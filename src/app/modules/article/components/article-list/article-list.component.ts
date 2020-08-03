import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  constructor(
    private articleService: ArticleService
  ) { }

  public articles$ = this.articleService.currentPageArticles$;

  public totalCount$ = this.articleService.totalCountOfArticles$;

  public displayedColumns: string[] = ['id', 'title', 'updatedAt', 'createdAt', 'author', 'actions'];
  

  public ngOnInit(): void {
    this.articleService.getArticlesByPage();
  }

  public changePage(page: number) {
    this.articleService.setPage(page);
  }

}
