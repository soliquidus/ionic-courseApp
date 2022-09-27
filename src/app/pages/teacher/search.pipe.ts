import {Pipe, PipeTransform} from '@angular/core';
import { Teacher } from 'src/app/models/teacher';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(teacher: Teacher[], searchInput: string): any[] {
    if (!teacher) {
      return [];
    }
    if (!searchInput) {
      return teacher;
    }

    searchInput = searchInput.toLowerCase();
    return teacher.filter(t =>
      t.firstName.toLowerCase().includes(searchInput) ||
      t.lastName.toLowerCase().includes(searchInput) ||
      t.yearsOfExperience.toLocaleString().includes(searchInput) ||
      t.discipline.toLowerCase().includes(searchInput) ||
      t.email.toLowerCase().includes(searchInput)
      );
  }

}
