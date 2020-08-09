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

  public comments$ = this.commentService.currentPageComments$;

  public totalCount$ = this.commentService.totalCountOfComments$;

  public displayedColumns: string[] = ['id', 'content', 'nickname', 'createdAt', 'actions'];

  ngOnInit(): void {
    this.commentService.fetchComments();
  }

  onPageChange(page: number) {
    this.commentService.setPage(page);
  }

}
