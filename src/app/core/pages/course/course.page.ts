import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.page.html',
  styleUrls: ['../shared/globalPageStyle.scss'],
})
export class CoursePage implements OnInit {
  title: string;

  constructor() { }

  ngOnInit() {
  }

}
