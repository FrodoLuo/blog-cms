import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user.service';

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
export class ArticleService {

  public currentPageArticles$ = new BehaviorSubject<Article[]>([]);
  public totalCountOfArticles$ = new BehaviorSubject<number>(0);
  public currentPage$ = new BehaviorSubject<number>(0);
  public currentKeyword$ = new BehaviorSubject<string>('');

  constructor(
    private http: HttpClient
  ) { }

  public setPage(page: number): void {
    this.currentPage$.next(page);
    this.getArticlesByPage();
  }

  public setKeyword(keyword: string): void {
    this.currentKeyword$.next(keyword);
    this.getArticlesByPage();
  }

  public getArticlesByPage(): void {
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
    ).subscribe(res => this.currentPageArticles$.next(res));
    this.http.get<number>(
      '/api/articles/count'
    ).subscribe(res => this.totalCountOfArticles$.next(res));
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
