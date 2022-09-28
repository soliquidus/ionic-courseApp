import {Course} from './course';
import {Teacher} from './teacher';

export class CourseJoint extends Course {
  teacher!: [Teacher];


  constructor(name: string, pupils: number, idProfessor: number, teacher: [Teacher]) {
    super(name, pupils, idProfessor);
    this.teacher = teacher;
  }
}
