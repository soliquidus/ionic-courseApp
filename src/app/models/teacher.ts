import {Model} from './model';

export class Teacher extends Model {
  firstName!: string;
  lastName!: string;
  email!: string;

  constructor(firstName: string = '', lastName: string = '', email: string = '') {
    super();
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
}
