import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user.service';
import { ListContentService } from './list-content.service';

export type Article = {
  title: string;
  content: string;
  author: User;
  tags: string;
  updatedAt: number;
  createdAt: number;
  brief: string;
}

@Injectable({
  providedIn: 'root'
})
export class ArticleService extends ListContentService<Article> {

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  public setPage(page: number): void {
    this.currentPage$.next(page);
    this.fetchDataByPage();
  }

  public setKeyword(keyword: string): void {
    this.currentKeyword$.next(keyword);
    this.fetchDataByPage();
  }

  public fetchDataByPage(): void {
    if (this.currentPage$ == null) return;
    const page = this.currentPage$.getValue().toString();
    this.http.get<Article[]>(
      '/api/articles',
      {
        params: {
          page,
          pageSize: '10',
          keyword: this.currentKeyword$.getValue()
        }
      }
    ).subscribe(res => this.currentPageList$.next(res));
    this.http.get<number>(
      '/api/articles/count'
    ).subscribe(res => this.totalCount$.next(res));
  }

  public saveArticle(article: Article): Observable<Article> {
    return this.http.post<Article>(
      '/api/articles',
      article
    );
  }
  
  public getArticleDetail(id: number): Observable<Article> {
    return this.http.get<Article>(
      `/api/articles/detail/${id}`
    );
  }
}
