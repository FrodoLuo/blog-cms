import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { CommentRoutingModule } from './comment-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [CommentListComponent],
  imports: [
    CommonModule,
    CommentRoutingModule,
    SharedModule
  ]
})
export class CommentModule { }
