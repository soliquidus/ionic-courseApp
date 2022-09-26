import {Model} from './model';

export class Role extends Model {
  role: string;

  constructor(role: string) {
    super();
    this.role = role;
  }
}
