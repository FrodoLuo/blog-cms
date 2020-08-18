import { Component, OnInit } from '@angular/core';
import { MediaService } from 'src/app/services/media.service';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload-dialog',
  templateUrl: './upload-dialog.component.html',
  styleUrls: ['./upload-dialog.component.scss']
})
export class UploadDialogComponent {

  constructor(
    private mediaService: MediaService,
    private dialogRef: MatDialogRef<UploadDialogComponent>
  ) {}

  public fileControl = new FormControl(null, [
    Validators.required
  ]);
  public tagControl = new FormControl('')

  public cancel():void {
    this.dialogRef.close();
  }

  public upload():void {
    console.log(this.fileControl.value);
  }

  public selectFile(event):void {
    console.dir(event);
  }
}
