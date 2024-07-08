import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseDialogPage } from './course-dialog.page';

const routes: Routes = [
  {
    path: '',
    component: CourseDialogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseDialogPageRoutingModule {}
