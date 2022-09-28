import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoursePageRoutingModule } from './course-routing.module';

import { CoursePage } from './course.page';
import {CoursesListPage} from './course-list/courses-list.page';
import {CourseAddPage} from './course-add/course-add.page';
import {SearchCoursePipe} from '../shared/searchCourse.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoursePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CoursePage, SearchCoursePipe, CoursesListPage, CourseAddPage],
  exports: [SearchCoursePipe]
})
export class CoursePageModule {}
