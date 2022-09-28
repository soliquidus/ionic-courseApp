import {Course} from './course';
import {User} from './User';

export class CourseJoint extends Course {
  teacher!: [User];


  constructor(name: string, pupils: number, idProfessor: number, teacher: [User]) {
    super(name, pupils, idProfessor);
    this.teacher = teacher;
  }
}
