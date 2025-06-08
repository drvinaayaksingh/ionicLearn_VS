import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';            // ← for ActivatedRoute, Router, etc.
import { HttpClientTestingModule } from '@angular/common/http/testing';   // ← for HttpClient
import { CoursePage } from './course.page';

describe('CoursePage', () => {
  let component: CoursePage;
  let fixture: ComponentFixture<CoursePage>;

  beforeEach(async () => {

     await TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(),
         RouterTestingModule.withRoutes([]),
        HttpClientTestingModule
      ],     // ← add this
      declarations: [CoursePage],
    }).compileComponents();
    
    fixture = TestBed.createComponent(CoursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
