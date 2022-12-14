import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeacherPageRoutingModule } from './teacher-routing.module';

import { TeacherPage } from './teacher.page';
import { TeacherAddPage } from './teacher-add/teacher-add.page';
import { TeacherListPage } from './teacher-list/teacher-list.page';
import {SearchTeacherPipe} from '../shared/searchTeacher.pipe';

@NgModule({
  declarations: [
    TeacherPage,
    TeacherAddPage,
    TeacherListPage,
    SearchTeacherPipe],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeacherPageRoutingModule,
    ReactiveFormsModule
  ],
  exports: [SearchTeacherPipe]
})
export class TeacherPageModule {}
