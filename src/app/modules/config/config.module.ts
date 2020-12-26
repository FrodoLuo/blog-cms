import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigRoutingModule } from './config-routing.module';
import { ConfigListComponent } from './components/config-list/config-list.component';
import { SharedModule } from '../shared/shared.module';
import { ConfigDialogComponent } from './components/config-dialog/config-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ConfigListComponent, ConfigDialogComponent],
  imports: [
    CommonModule,
    ConfigRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class ConfigModule { }
