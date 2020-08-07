import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticleEditComponent } from './components/article-edit/article-edit.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ArticleListComponent, ArticleEditComponent],
  imports: [
    ArticleRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class ArticleModule { }
