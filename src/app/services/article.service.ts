import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { User } from './user.service';

type Article = {
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

  constructor(
    private http: HttpClient
  ) {
    this.currentKeyword$.subscribe(this.getArticlesByPage);
    this.currentPage$.subscribe(this.getArticlesByPage);
  }

  public currentPageArticles$ = new BehaviorSubject<Article[]>([]);
  public totalCountOfArticles$ = new BehaviorSubject<number>(0);
  public currentPage$ = new BehaviorSubject<number>(0);
  public currentKeyword$ = new BehaviorSubject<string>('');

  public getArticlesByPage() {
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
  }

}
