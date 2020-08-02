import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticleEditComponent } from './components/article-edit/article-edit.component';



@NgModule({
  declarations: [ArticleListComponent, ArticleEditComponent],
  imports: [
    CommonModule,
    ArticleRoutingModule
  ]
})
export class ArticleModule { }
