import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CourseDialogPageRoutingModule } from './course-dialog-routing.module';

import { CourseDialogPage } from './course-dialog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CourseDialogPageRoutingModule
  ],
  declarations: [CourseDialogPage]
})
export class CourseDialogPageModule {}
