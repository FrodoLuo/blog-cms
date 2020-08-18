import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListContentService } from './list-content.service';

export type Media = {
  id: number;
  createdAt: string;
  updatedAt: string;
  tag: string;
  description: string;
  source: string;
  orderReference: number;
}

@Injectable({
  providedIn: 'root'
})
export class MediaService extends ListContentService<Media>{

  constructor(
    private http: HttpClient
  ) {
    super();
  }

  public setPage(page: number): void {
    throw new Error('Method not implemented.');
  }
  public fetchDataByPage(): void {
    this.http.get<Media[]>(
      '/api/media',
      {
        params: {
          page: this.currentPage$.getValue().toFixed(0),
          pageSize: '10'
        }
      }
    ).subscribe(
      res => {
        this.currentPageList$.next(res);
      }
    );
    this.http.get<number>(
      '/api/media/count'
    ).subscribe(r => this.totalCount$.next(r));
  }
  
}
