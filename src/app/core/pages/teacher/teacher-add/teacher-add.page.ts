import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UrlParts} from 'src/app/utils/urlParts';
import {ApiService} from '../../../../services/api.service';
import {User} from '../../../models/User';
import {redirectTo} from '../../../../utils/methods';

const urlPart = UrlParts.user;

@Component({
  selector: 'app-teacher-add',
  templateUrl: './teacher-add.page.html',
  styleUrls: ['../../shared/globalPageStyle.scss']
})
export class TeacherAddPage implements OnInit {

  title = 'Add a teacher';
  teacher = new User();
  teachers = new Array<User>();
  form!: FormGroup;
  id!: number;
  isNew!: boolean;

  constructor(
    private service: ApiService<User>,
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
      this.getTeacher(this.id);
    }
    this.initForm();
  }

  onSubmit(isNew: boolean) {
    this.teacher = this.form.value;
    if(!isNew) {
      this.service.update(urlPart, this.id, this.teacher).subscribe();
    } else {
      this.service.add(urlPart, this.teacher).subscribe();
    }
    redirectTo('teacher/list', this.router);
  }

initForm() {
  this.form = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.minLength(4), Validators
      .pattern('^[a-zA-Z 0-9]+$')]],
    lastName: ['', [Validators.required, Validators.minLength(4), Validators
      .pattern('^[a-zA-Z 0-9]+$')]],
    urlPhoto: [''],
    yearsOfExperience: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    discipline: [''],
    email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]]
  });
}

private getTeacher(id: number) {
  this.service.find(urlPart, id).subscribe(
    teacher => this.teacher = teacher
  );
}

  private getTeachers() {
    this.route.data.subscribe(data => this.teachers = data.teachers);
  }

}
