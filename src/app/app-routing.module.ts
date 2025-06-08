import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },


  {
    path: 'course-dialog',
    loadChildren: () => import('./course-dialog/course-dialog.module').then( m => m.CourseDialogPageModule)
  },
  {
    path: 'course/:courseId',
    loadChildren: () => import('./course/course.module').then( m => m.CoursePageModule)
  },
   {
    path: 'billing',
    loadChildren: () => import('./billing/billing.module').then( m => m.BillingPageModule)
  },
  {
    path: '**',
    redirectTo: '/'
  },
 

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
