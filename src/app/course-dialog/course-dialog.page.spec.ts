import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseDialogPage } from './course-dialog.page';

describe('CourseDialogPage', () => {
  let component: CourseDialogPage;
  let fixture: ComponentFixture<CourseDialogPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDialogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
