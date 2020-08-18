import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListContentService } from './list-content.service';

export type Media = {

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
    throw new Error('Method not implemented.');
  }
  
}
