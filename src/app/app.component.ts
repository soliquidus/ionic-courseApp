import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPagesCourse = [
    {titleCourse: 'Course List', url: '/course/list', icon: 'list'},
  ];

  public appPagesTeacher = [
    {titleTeacher: 'Teacher List', url: '/teacher/list', icon: 'list'},
  ];

  dark = false;
  loggedIn = false;


  constructor() {
  }

  public logout() {

  }

  public login() {

  }
}
