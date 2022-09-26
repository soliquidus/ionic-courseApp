import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeacherAddPage } from './teacher-add/teacher-add.page';
import { TeacherListPage } from './teacher-list/teacher-list.page';

import { TeacherPage } from './teacher.page';

const routes: Routes = [
  {
    path: '',
    component: TeacherPage,
    children: [
      {
        path: 'list',
        component: TeacherListPage
      },
      {
        path: 'add',
        component: TeacherAddPage
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherPageRoutingModule {}
