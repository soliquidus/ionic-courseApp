import {Model} from './model';

export class Course extends Model {
  name!: string;
  pupils!: number;
  teacherId!: number;

  constructor(name: string = '', pupils: number = 0, teacherId: number = 0) {
    super();
    this.name = name;
    this.pupils = pupils;
    this.teacherId = teacherId;
  }
}
