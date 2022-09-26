import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'course',
    pathMatch: 'full'
  },
  {
    path: 'course',
    loadChildren: () => import('./pages/course/course.module').then(m => m.CoursePageModule)
  },
  {
    path: 'teacher',
    loadChildren: () => import('./pages/teacher/teacher.module').then( m => m.TeacherPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
