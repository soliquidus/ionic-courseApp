import {Component, OnInit} from '@angular/core';
import {Course} from '../../../models/course';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../../services/api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UrlParts} from '../../../utils/urlParts';
import {Teacher} from '../../../models/teacher';
import {redirectTo} from '../../../utils/methods';

const urlPart = UrlParts.course;

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.page.html',
  styleUrls: ['../globalPageStyle.scss'],
})
export class CourseAddPage implements OnInit {

  title = 'Add a course';
  course = new Course();
  teachers = new Array<Teacher>();
  form!: FormGroup;
  id!: number;
  isNew!: boolean;

  constructor(
    private service: ApiService<Course>,
    private teacherService: ApiService<Teacher>,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {
    this.getTeachers();
    this.id = this.route.snapshot.params.id;
    this.isNew = !this.id;
    if (!this.isNew) {
      this.getCourse(this.id);
    }
    this.initForm();
  }

  onSubmit(isNew: boolean) {
    this.course = this.form.value;
    if(!isNew){
      this.service.update(urlPart, this.id, this.course).subscribe();
    } else {
      this.service.add(urlPart, this.course).subscribe();
    }
    window.location.href='/course/list';
  }

  initForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4), Validators
        .pattern('^[a-zA-Z 0-9]+$')]],
      pupils: ['', Validators.required],
      teacherId: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    });
  }

  private getTeachers() {
    this.route.data.subscribe(data => this.teachers = data.teachers);
  }

  private getCourse(id: number) {
    this.service.find(urlPart, id).subscribe(
      c => this.course = c
    );
  }
}
