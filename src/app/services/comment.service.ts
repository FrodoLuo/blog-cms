import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Article } from './article.service';
import { HttpClient } from '@angular/common/http';
import { ListContentService } from './list-content.service';

export type Comment = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  nickname: string;
  content: string;
  article: Article;
  articleId: number;
}
@Injectable({
  providedIn: 'root'
})
export class CommentService extends ListContentService<Comment> {

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  public fetchDataByPage(): void {
    const page = this.currentPage$.getValue().toFixed(0);
    const pageSize = '10';
    this.http.get<Comment[]>(
      '/api/comments',
      {
        params: {
          page,
          pageSize
        }
      }
    ).subscribe(res => this.currentPageList$.next(res));
    this.http.get<number>(
      '/api/comments/count'
    ).subscribe(res => this.totalCount$.next(res));
  }

  public setPage(page: number): void {
    this.currentPage$.next(page);
    this.fetchDataByPage();
  }
}
