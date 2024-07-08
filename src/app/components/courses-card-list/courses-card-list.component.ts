import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../../model/course';
import { ModalController } from '@ionic/angular';
import { CourseDialogPage } from '../../course-dialog/course-dialog.page';
import { filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-courses-card-list',
  templateUrl: './courses-card-list.component.html',
  styleUrls: ['./courses-card-list.component.scss'],
})
export class CoursesCardListComponent  implements OnInit {

 
  @Input()
  courses: Course[] | null = [];

  @Output()
  private coursesChanged = new EventEmitter();

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  async editCourse(course: Course) {
    const modal = await this.modalController.create({
      component: CourseDialogPage,
      componentProps: { course },
      backdropDismiss: false
    });

    modal.onDidDismiss()
      .then((result) => {
        if (result.data) {
          this.coursesChanged.emit();
        }
      });

    return await modal.present();
  }
}