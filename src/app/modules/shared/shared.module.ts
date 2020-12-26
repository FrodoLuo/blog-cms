import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { NotifyModule } from '../notify/notify.module';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { UploadComponent } from './components/upload/upload.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UploadComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
