import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaRoutingModule } from './media-routing.module';
import { MediaListComponent } from './components/media-list/media-list.component';
import { SharedModule } from '../shared/shared.module';
import { UploadDialogComponent } from './components/upload-dialog/upload-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialFileInputModule } from 'ngx-material-file-input';


@NgModule({
  declarations: [MediaListComponent, UploadDialogComponent],
  imports: [
    CommonModule,
    MediaRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialFileInputModule
  ]
})
export class MediaModule { }
