import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { NotifyModule } from '../notify/notify.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    NotifyModule
  ],
  exports: [
    MaterialModule
  ]
})
export class SharedModule { }
