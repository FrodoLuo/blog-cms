import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { ListContentService } from './list-content.service';

export type Config = {
  id: number;
  title: string;
  data: string;
  updatedAt: Date;
  createdAt: Date;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService extends ListContentService<Config> {
  public constructor(
    private http: HttpClient
  ) {
    super();
  }

  public setPage(page: number): void {
    this.currentPage$.next(page);
    this.fetchDataByPage();
  }
  public fetchDataByPage(): void {
    this.http.get<Config[]>('/api/configs')
      .subscribe(res => this.currentPageList$.next(res));
  }

  public postConfig(config: Config): Observable<Config> {
    return this.http.post<Config>('/api/configs', config)
      .pipe(
        retry(1)
      );
  }

}
