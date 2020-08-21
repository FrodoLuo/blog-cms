import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListContentService } from './list-content.service';
import { fileURLToPath } from 'url';
import { Observable } from 'rxjs';

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
    this.currentPage$.next(page);
    this.fetchDataByPage();
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

  public postMedia(data: any): Observable<Media> {
    const formData = new FormData();
    formData.append('file', data.file.files[0]);
    formData.append('tag', data.tag);
    formData.append('description', data.description);
    formData.append('orderReference', data.orderReference);

    return this.http.post<Media>(
      '/api/media',
      formData
    );
  }
}
