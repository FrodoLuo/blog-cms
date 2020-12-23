import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { NotifyModule } from '../notify/notify.module';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { UploadComponent } from './components/upload/upload.component';

@NgModule({
  declarations: [UploadComponent],
  imports: [
    CommonModule,
    MaterialModule,
    MaterialFileInputModule,
    NotifyModule,
  ],
  exports: [
    UploadComponent,
    MaterialModule,
    MaterialFileInputModule,
  ]
})
export class SharedModule { }
