import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Config, ConfigService } from 'src/app/services/config.service';
import { ConfigDialogComponent } from '../config-dialog/config-dialog.component';

@Component({
  selector: 'app-config-list',
  templateUrl: './config-list.component.html',
  styleUrls: ['./config-list.component.scss']
})
export class ConfigListComponent implements OnInit {

  constructor(
    private configService: ConfigService,
    private dialog: MatDialog,
  ) { }

  public configs$ = this.configService.currentPageList$;

  public displayColumns = ['id', 'title', 'updatedAt', 'data', 'actions'];

  ngOnInit(): void {
    this.configService.fetchDataByPage();
  }

  addConfig(): void {
    this.dialog.open(ConfigDialogComponent, {
      disableClose: true,
      autoFocus: false,
    });
  }

  editConfig(element: Config): void {
    this.dialog.open(ConfigDialogComponent, {
      disableClose: true,
      autoFocus: false,
      data: {
        config: element
      }
    });
  }
}
