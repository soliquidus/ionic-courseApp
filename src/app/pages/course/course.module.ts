import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoursePageRoutingModule } from './course-routing.module';

import { CoursePage } from './course.page';
import {CoursesListPageModule} from './course-list/courses-list.module';
import {CourseAddPageModule} from './course-add/course-add.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoursePageRoutingModule,
    CoursesListPageModule,
    CourseAddPageModule
  ],
  declarations: [CoursePage]
})
export class CoursePageModule {}
