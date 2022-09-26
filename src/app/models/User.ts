import {Model} from './model';

export class User extends Model {
  roleId: number;
  login: string;
  password: string;
  firstName!: string;
  lastName!: string;
  email!: string;

  constructor(roleId: number = 0, login: string = '', password: string = '',
              firstName: string = '', lastName: string = '', email: string = '') {
    super();
    this.roleId = roleId;
    this.login = login;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
}
