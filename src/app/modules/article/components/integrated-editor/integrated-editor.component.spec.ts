import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegratedEditorComponent } from './integrated-editor.component';

describe('IntegratedEditorComponent', () => {
  let component: IntegratedEditorComponent;
  let fixture: ComponentFixture<IntegratedEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntegratedEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegratedEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
