import {Model} from './model';

export class User extends Model {
  roleId: number;
  login: string;
  password: string;
  firstName!: string;
  lastName!: string;
  email!: string;
  discipline!: string;
  yearsOfExperience!: number;
  urlPhoto!: string;

  constructor(roleId: number = 0, login: string = '', password: string = '',
              firstName: string = '', lastName: string = '', email: string = '',
              discipline: string = '', yearsOfExperience: number = 0, urlPhoto = '') {
    super();
    this.roleId = roleId;
    this.login = login;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.discipline = discipline;
    this.yearsOfExperience = yearsOfExperience;
    this.urlPhoto = urlPhoto;
  }
}
