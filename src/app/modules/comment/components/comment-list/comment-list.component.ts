import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {

  constructor(
    private commentService: CommentService
  ) { }

  public comments$ = this.commentService.currentPageList$;

  public totalCount$ = this.commentService.totalCount$;

  public displayedColumns: string[] = ['id', 'content', 'nickname', 'createdAt', 'actions'];

  ngOnInit(): void {
    this.commentService.fetchDataByPage();
  }

  onPageChange(page: number): void {
    this.commentService.setPage(page);
  }

}
