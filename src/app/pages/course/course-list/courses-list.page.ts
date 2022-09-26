import {Component, OnInit, Output} from '@angular/core';
import {Course} from '../../../models/course';
import {ApiService} from '../../../services/api.service';
import {Router} from '@angular/router';
import {UrlParts} from '../../../utils/urlParts';
import {CourseJoint} from '../../../models/courseJoint';

const urlPart = UrlParts.courseProfessorJoint;
const urlPartCourse = UrlParts.course;

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.page.html',
  styleUrls: ['../globalPageStyle.scss'],
})
export class CoursesListPage implements OnInit {

  @Output()
  title = 'Courses';

  courses!: CourseJoint[];
  course!: Course;
  searchInput!: string;

  constructor(private service: ApiService<CourseJoint>, private router: Router) {
  }

  ngOnInit() {
    this.course = new Course();
    this.service.findAll(urlPart).subscribe(list => this.courses = list);
  }

  delete(c: CourseJoint) {
    this.service.delete(urlPartCourse, c).subscribe(() => {
      this.ngOnInit();
    });
  }

}
