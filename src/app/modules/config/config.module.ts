import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigRoutingModule } from './config-routing.module';
import { ConfigListComponent } from './components/config-list/config-list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ConfigListComponent],
  imports: [
    CommonModule,
    ConfigRoutingModule,
    SharedModule,
  ]
})
export class ConfigModule { }
