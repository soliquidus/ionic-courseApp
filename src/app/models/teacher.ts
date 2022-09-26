import {Model} from './model';

export class Teacher extends Model {
  firstName!: string;
  lastName!: string;
  urlPhoto!: string;
  yearsOfExperience!: number;
  discipline!: string;
  email!: string;

  constructor(
  firstName: string = '',
  lastName: string = '',
  urlPhoto: string = '',
  yearsOfExperience: number = 0,
  discipline: string = '', email:
  string = '')
  {
    super();
    this.firstName = firstName;
    this.lastName = lastName;
    this.urlPhoto = urlPhoto;
    this.yearsOfExperience = yearsOfExperience;
    this.discipline = discipline;
    this.email = email;
  }
}
