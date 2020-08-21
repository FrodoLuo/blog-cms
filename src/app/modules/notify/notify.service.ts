import { Injectable, ViewContainerRef } from '@angular/core';
import { NotifyModule } from './notify.module';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: NotifyModule
})
export class NotifyService {

  constructor(
    private _snackBar: MatSnackBar
  ) {}

  public info(text: string): void {
    this._snackBar.open(
      text, null,
      {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 4000
      });
  }

}
