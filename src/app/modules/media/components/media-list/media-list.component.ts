import { Component, OnInit } from '@angular/core';
import { MediaService } from 'src/app/services/media.service';
import { MatDialog } from '@angular/material/dialog';
import { UploadDialogComponent } from '../upload-dialog/upload-dialog.component';

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.scss']
})
export class MediaListComponent implements OnInit {

  constructor(
    private mediaService: MediaService,
    private dialog: MatDialog
  ) { }

  public media$ = this.mediaService.currentPageList$;

  public currentPage$ = this.mediaService.currentPage$;

  public totalCount$ = this.mediaService.totalCount$;

  public displayedColumns: string[] = ['id', 'source', 'preview', 'tag', 'createdAt', 'actions'];

  public ngOnInit(): void {
    this.mediaService.fetchDataByPage();
  }

  public setPage(page:number):void {
    this.mediaService.setPage(page);
  }

  public openUploadDialog():void {
    this.dialog.open(UploadDialogComponent, {
      disableClose: true,
      autoFocus: false
    });
  }

}
