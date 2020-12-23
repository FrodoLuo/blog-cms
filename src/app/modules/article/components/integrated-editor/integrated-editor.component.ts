import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import Editor from '@toast-ui/editor';
import { MediaService } from 'src/app/services/media.service';

@Component({
  selector: 'app-integrated-editor',
  templateUrl: './integrated-editor.component.html',
  styleUrls: ['./integrated-editor.component.scss']
})
export class IntegratedEditorComponent implements AfterViewInit {

  public constructor(
    private mediaService: MediaService
  ) {}

  @Input()
  public control: FormControl;

  @ViewChild('editorContainer')
  public editorContainer: ElementRef<HTMLDivElement>;

  public ngAfterViewInit(): void {
    const editor = new Editor({
      el: this.editorContainer.nativeElement,
      initialEditType: 'markdown',
      previewStyle: 'vertical',
    });
    editor.addHook('addImageBlobHook', (file: File, callback) => {
      this.mediaService.uploadMedia(file, 'article', '', '0')
        .subscribe(res => {
          callback(res.source);
        });
    });
    editor.on('change', () => {this.control.setValue(editor.getMarkdown());});
  }
}
