import { Component, OnInit } from '@angular/core';
import {Course, CourseResponse, sortCoursesBySeqNo} from '../model/course';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import {CourseDialogPage} from '../course-dialog/course-dialog.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
 public selectedSegment: string = "beginners";
 
  beginnerCourses: Course[] | undefined;

  advancedCourses: Course[] | undefined;


  constructor(private http: HttpClient, private modalController: ModalController) {

  }

  segmentChanged(event: any) {
    console.log('Segment changed', event);
    // Handle segment change here
    this.selectedSegment = event.detail.value;
  }


  ngOnInit() {

    this.http.get<CourseResponse>('/api/courses')
      .subscribe(
        res => {  
          console.log("---res-- ", res, res.payload);
          if(res && res["payload"] ){
          const courses: Course[] = res["payload"].sort(sortCoursesBySeqNo);
          this.beginnerCourses = courses.filter(course => course.category == "BEGINNER");
          this.advancedCourses = courses.filter(course => course.category == "ADVANCED");
          }

        });

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
