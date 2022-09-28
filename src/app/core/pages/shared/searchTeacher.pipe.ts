import {Pipe, PipeTransform} from '@angular/core';
import {User} from '../../models/User';

@Pipe({
  name: 'searchTeacher'
})
export class SearchTeacherPipe implements PipeTransform {

  transform(teacher: User[], searchInput: string): any[] {
    if (!teacher) {
      return [];
    }
    if (!searchInput) {
      return teacher;
    }

    searchInput = searchInput.toLowerCase();
    return teacher.filter(t =>
      t.roleId === 2 &&
      t.firstName.toLowerCase().includes(searchInput) ||
      t.lastName.toLowerCase().includes(searchInput) ||
      t.yearsOfExperience.toLocaleString().includes(searchInput) ||
      t.discipline.toLowerCase().includes(searchInput) ||
      t.email.toLowerCase().includes(searchInput)
      );
  }

}
