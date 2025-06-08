import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CourseDialogPage } from './course-dialog.page';
import { RouterTestingModule } from '@angular/router/testing';            // ← for ActivatedRoute, Router, etc.
import { HttpClientTestingModule } from '@angular/common/http/testing';   // ← for HttpClient

describe('CourseDialogPage', () => {
  let component: CourseDialogPage;
  let fixture: ComponentFixture<CourseDialogPage>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
          imports: [IonicModule.forRoot(),
             RouterTestingModule.withRoutes([]),
        HttpClientTestingModule
          ],     // ← add this
          declarations: [CourseDialogPage],
        }).compileComponents();
        
    fixture = TestBed.createComponent(CourseDialogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
