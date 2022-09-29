import {Model} from './model';

export class Course extends Model {
  name!: string;
  pupils!: number;
  userId!: number;

  constructor(name: string = '', pupils: number = 0, userId: number = 0) {
    super();
    this.name = name;
    this.pupils = pupils;
    this.userId = userId;
  }
}
