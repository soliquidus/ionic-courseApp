import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {CoursePage} from './course.page';
import {CoursesListPage} from './course-list/courses-list.page';
import {CourseAddPage} from './course-add/course-add.page';
import {TeacherResolver} from './teacher.resolver';

const routes: Routes = [
  {
    path: '',
    component: CoursePage,
    children: [
      {
        path: 'list',
        component: CoursesListPage
      },
      {
        path: 'add',
        component: CourseAddPage,
        resolve: {teachers: TeacherResolver}
      },
      {
        path: 'edit/:id',
        component: CourseAddPage,
        resolve: {teachers: TeacherResolver}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursePageRoutingModule {
}
