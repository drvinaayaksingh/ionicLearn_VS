import { Component, OnInit } from '@angular/core';
import {Course, CourseResponse, sortCoursesBySeqNo} from '../model/course';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import {CourseDialogPage} from '../course-dialog/course-dialog.page';
import { Observable, map } from 'rxjs';
import {CoursesStoreService} from '../services/courses-store.service';
import {CoursesService} from '../services/courses.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
 public selectedSegment: string = "beginners";
 
 beginnerCourses$: Observable<Course[]>  | null = null;

 advancedCourses$: Observable<Course[]>  | null = null;


  constructor(private http: HttpClient, private modalController: ModalController, 
    // private coursesStore: CoursesStoreService, 
    private courseService:CoursesService ) {

  }

  segmentChanged(event: any) {
    console.log('Segment changed', event);
    // Handle segment change here
    this.selectedSegment = event.detail.value;
  }


  ngOnInit() {
    this.reloadCourses();
}

reloadCourses() {
  const courses$ = this.courseService.loadAllCourses(); 

  courses$.subscribe(val => console.log(val));
    // this.beginnerCourses$ = this.coursesStore.filterByCategory("BEGINNER");
    // this.advancedCourses$ = this.coursesStore.filterByCategory("ADVANCED");

    this.beginnerCourses$ = courses$.
    pipe(
    map( courses => courses.filter(course => course.category =='BEGINNER' ) )
    );

    this.advancedCourses$ = courses$.
    pipe(
    map( courses => courses.filter(course => course.category =='ADVANCED' ) )
    );
  
}

  async editCourse(course: Course) {
    const modal = await this.modalController.create({
      component: CourseDialogPage,
      componentProps: {
        'course': course
      },
      cssClass: 'my-custom-class',  // Define a custom class if needed for styling
      backdropDismiss: false,       // Equivalent to disableClose
      showBackdrop: true            // Show the backdrop
    });

    modal.onDidDismiss().then((data) => {
      // Handle data returned from the modal
      console.log('Modal Data:', data);
    });

    return await modal.present();
  }


}
