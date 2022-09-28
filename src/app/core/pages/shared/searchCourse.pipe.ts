import {Pipe, PipeTransform} from '@angular/core';
import {CourseJoint} from '../../models/courseJoint';

@Pipe({
  name: 'searchCourse'
})
export class SearchCoursePipe implements PipeTransform {

  transform(course: CourseJoint[], searchInput: string): any[] {
    if (!course) {
      return [];
    }
    if (!searchInput) {
      return course;
    }

    searchInput = searchInput.toLowerCase();
    return course.filter(c => c.name.toLowerCase().includes(searchInput) ||
        c.user[0].firstName.toLowerCase().includes(searchInput) ||
        c.user[0].lastName.toLowerCase().includes(searchInput));
  }

}
