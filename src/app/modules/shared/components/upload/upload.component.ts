import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { MediaService } from 'src/app/services/media.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  private i = document.createElement('input');

  @Input()
  public control: FormControl;

  public uploading = false;

  constructor(
    private mediaService: MediaService
  ) { }

  public ngOnInit(): void {
    this.initInput();
  }

  public chooseFile(): void {
    this.i.type = 'file';
    this.i.click();
  }

  private upload() {
    const file = this.i.files[0];
    this.uploading = true;
    this.mediaService.uploadMedia(file, 'article', '', '0')
      .pipe(
        finalize(() => {
          this.uploading = false;
        })
      )
      .subscribe(res => {
        this.control.setValue(res.source);
      });
  }

  private initInput() {
    this.i = document.createElement('input');
    this.i.type = 'file';
    this.i.addEventListener('change', () => this.upload());
  }

}
