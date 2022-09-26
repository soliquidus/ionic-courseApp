import {Model} from './model';

export class Teacher extends Model {
  firstName!: string;
  lastName!: string;
  urlPhoto!: string;
  yearsOfExperience!: number;
  email!: string;

  constructor(firstName: string = '', lastName: string = '', urlPhoto: string = '', yearsOfExperience: number = 0, email: string = '') {
    super();
    this.firstName = firstName;
    this.lastName = lastName;
    this.urlPhoto = urlPhoto;
    this.yearsOfExperience = yearsOfExperience;
    this.email = email;
  }
}
