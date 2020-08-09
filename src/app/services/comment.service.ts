import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Article } from './article.service';
import { HttpClient } from '@angular/common/http';

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
export class CommentService {

  constructor(
    private http: HttpClient
  ) { }

  public currentPageComments$ = new BehaviorSubject<Comment[]>([]);
  public totalCountOfComments$ = new BehaviorSubject<number>(0);
  public currentPage$ = new BehaviorSubject<number>(0);

  public fetchComments() {
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
    ).subscribe(res => this.currentPageComments$.next(res));
    this.http.get<number>(
      '/api/comments/count'
    ).subscribe(res => this.totalCountOfComments$.next(res));
  }

  public setPage(page: number) {
    this.currentPage$.next(page);
    this.fetchComments();
  }
}
