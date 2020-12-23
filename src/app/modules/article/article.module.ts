import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticleEditComponent } from './components/article-edit/article-edit.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';
import { IntegratedEditorComponent } from './components/integrated-editor/integrated-editor.component';



@NgModule({
  declarations: [ArticleListComponent, ArticleEditComponent, IntegratedEditorComponent],
  imports: [
    ArticleRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MarkdownModule.forRoot(),
  ]
})
export class ArticleModule { }
