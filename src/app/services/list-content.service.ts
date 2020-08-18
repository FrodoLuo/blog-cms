import { BehaviorSubject } from 'rxjs';

export abstract class ListContentService<T> {

  public currentPageList$ = new BehaviorSubject<T[]>([]);

  public totalCount$ = new BehaviorSubject<number>(0);
  public currentPage$ = new BehaviorSubject<number>(0);
  public currentKeyword$ = new BehaviorSubject<string>('');

  public abstract setPage(page: number): void;

  public abstract fetchDataByPage(): void;

}