import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Teacher } from 'src/app/models/teacher';
import { ApiService } from 'src/app/services/api.service';
import { UrlParts } from 'src/app/utils/urlParts';

const urlPart = UrlParts.teacher;

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.page.html',
  styleUrls: ['./teacher-list.page.scss'],
})
export class TeacherListPage implements OnInit {

  @Output()
  title = 'Teachers';

  teacher!: Teacher;
  teachers!: Teacher[];
  searchInput!: string;

  constructor(private service: ApiService<Teacher>, private router: Router) {
  }

  ngOnInit() {
    this.teacher = new Teacher();
    this.service.findAll(urlPart).subscribe(list => this.teachers);
  }

  delete(teacher: Teacher) {
    this.service.delete(urlPart, teacher).subscribe( () => {
      this.ngOnInit();
    });
  }

}
