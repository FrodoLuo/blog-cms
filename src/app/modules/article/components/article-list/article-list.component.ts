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

  public articles$ = this.articleService.currentPageList$;

  public totalCount$ = this.articleService.totalCount$;

  public displayedColumns: string[] = ['id', 'title', 'updatedAt', 'createdAt', 'author', 'actions'];
  

  public ngOnInit(): void {
    this.articleService.fetchDataByPage();
  }

  public changePage(page: number): void {
    this.articleService.setPage(page);
  }
}
