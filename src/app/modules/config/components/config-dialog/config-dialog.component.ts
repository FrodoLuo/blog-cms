import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotifyService } from 'src/app/modules/notify/notify.service';
import { Config, ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-config-dialog',
  templateUrl: './config-dialog.component.html',
  styleUrls: ['./config-dialog.component.scss']
})
export class ConfigDialogComponent {

  public configForm = new FormGroup({
    id: new FormControl(0),
    title: new FormControl('', [Validators.required]),
    data: new FormControl('', [ConfigDialogComponent.isJson]),
  })

  constructor(
    private configService: ConfigService,
    private dialogRef: MatDialogRef<ConfigDialogComponent>,
    private notifyService: NotifyService,
    @Inject(MAT_DIALOG_DATA) data: { config: Config },
  ) {
    if (data) {
      this.configForm.setValue({
        id: data.config.id,
        title: data.config.title,
        data: data.config.data
      });
    }
  }

  public close(): void {
    this.dialogRef.close();
  }

  public submit(): void {
    this.configService.postConfig(this.configForm.getRawValue())
      .subscribe(() => {
        this.notifyService.info('Config Saved');
        this.dialogRef.close();
        this.configService.fetchDataByPage();
      });
  }

  private static isJson: ValidatorFn = (control: FormControl) => {
    try {
      JSON.parse(String(control.value));
      return null;
    } catch (err) {
      return {
        isJson: true
      };
    }
  }
}
