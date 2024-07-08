import { AfterViewInit, Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Course } from '../model/course';

@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.page.html',
  styleUrls: ['./course-dialog.page.scss'],
})
export class CourseDialogPage implements AfterViewInit  {

 
  @Input() course: Course | undefined;

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private modalController: ModalController
  ) {
    this.form = this.fb.group({
      description: ['', Validators.required],
      category: ['', Validators.required],
      releasedAt: [new Date(), Validators.required],
      longDescription: ['', Validators.required]
    });
  }

  ngAfterViewInit() {
    if (this.course) {
      this.form.patchValue(this.course);
    }
  }

  save() {
    const changes = this.form.value;
    this.modalController.dismiss(changes);
  }

  close() {
    this.modalController.dismiss();
  }

}
