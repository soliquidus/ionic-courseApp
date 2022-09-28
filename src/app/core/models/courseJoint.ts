import {Course} from './course';
import {User} from './User';

export class CourseJoint extends Course {
  user!: User[];


  constructor(name: string, pupils: number, idProfessor: number, user: User[]) {
    super(name, pupils, idProfessor);
    this.user = user;
  }
}
