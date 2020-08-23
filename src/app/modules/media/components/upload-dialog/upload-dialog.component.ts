import { Component, OnInit } from '@angular/core';
import { MediaService } from 'src/app/services/media.service';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { empty } from 'rxjs';
import { NotifyService } from 'src/app/modules/notify/notify.service';

@Component({
  selector: 'app-upload-dialog',
  templateUrl: './upload-dialog.component.html',
  styleUrls: ['./upload-dialog.component.scss']
})
export class UploadDialogComponent {

  constructor(
    private mediaService: MediaService,
    private notifyService: NotifyService,
    private dialogRef: MatDialogRef<UploadDialogComponent>
  ) {}

  public uploadForm = new FormGroup({
    'file': new FormControl(null,
      [Validators.required]
    ),
    'tag': new FormControl(''),
    'description': new FormControl(''),
    'orderReference': new FormControl(0)
  });

  public uploading = false;

  public cancel():void {
    this.dialogRef.close();
  }

  public upload():void {
    this.uploading = true;
    const data = this.uploadForm.getRawValue();
    this.mediaService.postMedia(data)
      .pipe(
        catchError((err, caught) => {
          this.uploading = false;
          console.error(err);
          this.notifyService.info('Upload failed');
          return empty();
        })
      )
      .subscribe(res => {
        this.notifyService.info('Uploaded');
        this.mediaService.fetchDataByPage();
        this.uploading = false;
        this.dialogRef.close();
      });
  }
}
